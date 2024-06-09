import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { authLoginByEmail, refreshToken } from "./services/apis/requests/auth"
import { parseCookies } from "./lib/utils"
import { jwtDecode } from "jwt-decode"
import { getUserprofile } from "./services/apis/requests/user"

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
        const { email, password, rememberMe } = credentials

        const res: any = await authLoginByEmail({
          email: email,
          pwd: password,
          rememberMe: true
        })

        if (!res) {
          throw new Error("User not found.")
        }

        const cookies = parseCookies(res.cookies)
        const user = parseJwt(res.accessToken)

        return {
          token: res.accessToken,
          refresh: cookies.refresh,
          user
        }
      },
    }),
  ],
  callbacks: {
    async session ({ token, session }) {
      console.log({ sessionToken: token, session })

      const existingUser = await getUserprofile(token.token)

      if (token.sub && session.user) {
        session.user = existingUser
      }
      return session
    },
    async jwt ({ token, user }) {

      console.log("tokkk", token)
      const currentTime = Math.floor(Date.now() / 1000)
      if (token?.exp && currentTime > token.exp) {
        console.log("token expired", token, currentTime)
        try {
          const res = await refreshToken(token?.refresh)
          const cookies = parseCookies(res.cookies)

          const user = {
            token: res.accessToken,
            refresh: cookies.refresh
          }

          return {
            ...token,
            ...user,
          }
        } catch (error) {
          console.log("err", error)
        }
      }
      return { ...token, ...user }
    },
    async redirect ({ url, baseUrl }) {
      return baseUrl
    },
  }
})
