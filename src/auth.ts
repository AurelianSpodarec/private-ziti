import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { authLoginByEmail, refreshToken } from "./services/apis/requests/auth"
import { parseCookies } from "./lib/utils"
import { jwtDecode } from "jwt-decode"

function parseJwt (token) {
  try {
    return jwtDecode(token)
  } catch (error) {
    console.error("Failed to decode JWT", error)
    return null
  }
}


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials, req) => {
        const res: any = await authLoginByEmail({
          identifier: "ivanferrera@gmail.com",
          pwd: "abc123",
          rememberMe: true
        })

        if (!res) {
          throw new Error("User not found.")
        }
        // console.log("###################################", res)
        const cookies = parseCookies(res.cookies)
        const user = parseJwt(res.accessToken)
        console.log("~###############################", user)
        return {
          token: res.accessToken,
          refresh: cookies.refresh,
        }
      },
    }),
  ],
  callbacks: {
    async jwt ({ token, user }) {
      const currentTime = Math.floor(Date.now() / 1000)
      if (token?.exp && currentTime > token.exp) {
        try {
          const res = await refreshToken(token?.refresh)
          const cookies = parseCookies(res.cookies)
          const user = {
            token: res.accessToken,
            refresh: cookies.refresh
          }
          return {
            ...token,
            ...user
          }
        } catch (error) {
          console.log("err", error)
          return new URL("/signin")
        }
      }
      return { ...token, ...user }
    },
    async session ({ session, token, user }) {
      session.user = token as any
      session.cookies = token.cookies
      return session
    },
    async redirect ({ url, baseUrl }) {
      console.log({ baseUrl })
      console.log({ url })
      return baseUrl
    },
  }
})
