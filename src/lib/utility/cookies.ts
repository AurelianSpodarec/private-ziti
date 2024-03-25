// src/lib/utility/cookies.ts

// Directive to indicate that this module is intended for client-side usage.
'use client'

// Importing the Cookies class from the 'universal-cookie' package.
// This class provides functionalities for working with cookies in the browser.
import Cookies from 'universal-cookie'

// Creating an instance of the Cookies class.
// This instance will be used to manage cookies throughout the application.
const cookies = new Cookies()

/**
 * Sets a cookie with the specified key and value.
 *
 * @param key - The name of the cookie to set.
 * @param val - The value of the cookie.
 * @param maxAge - The maximum age of the cookie in seconds.
 *                 If undefined, the cookie lasts for the session duration.
 *                 A value of 0 indicates a session cookie which expires when the browser is closed.
 * @param httpOnly - Indicates if the cookie should be accessible only by the web server.
 *                   Setting this to true enhances security by preventing client-side access.
 * @param secure - Indicates if the cookie should be transmitted only over secure protocols like HTTPS.
 *                 It is set to true when NODE_ENV is 'production' to enhance security in production environments.
 * @param sameSite - Controls whether a cookie is sent with cross-origin requests, providing some protection against CSRF attacks.
 *                   Can be 'strict', 'lax', or 'none'. Defaults to 'strict'.
 */
export const setCookie = (
  key: string,
  val: string,
  maxAge: number | undefined = undefined,
  httpOnly = false,
  secure = process.env.NODE_ENV === 'production',
  sameSite: 'strict' | 'lax' | 'none' = 'strict'
): void => {
  // Setting the cookie using the universal-cookie instance.
  // The options object includes path, maxAge, httpOnly, secure, and sameSite attributes.
  cookies.set(key, val, {
    path: '/',
    maxAge,
    httpOnly,
    secure,
    sameSite,
    ...(sameSite === 'none' && { secure: true }) // Ensuring that secure flag is enforced if sameSite is 'none'.
  })
}

/**
 * Retrieves the value of a cookie by its key.
 *
 * @param key - The name of the cookie to retrieve.
 * @returns The value of the cookie if it exists, or undefined if the cookie does not exist.
 */
export const getCookie = (key: string): string | undefined => {
  return cookies.get(key)
}

/**
 * Removes a cookie by its key.
 *
 * @param key - The name of the cookie to be removed.
 */
export const removeCookie = (key: string): void => {
  // Removing the specified cookie.
  cookies.remove(key, { path: '/' }) // The path option ensures the cookie is removed from the root path.
}

/**
 * Clears all cookies except for a specified list of cookies.
 *
 * Cookies not cleared include 'theme.mode', 'theme', and 'cookie_consent'.
 * These are typically cookies that store user preferences and consent settings.
 */
export const clearCookies = (): void => {
  // Retrieving all cookies as an object where keys are cookie names and values are cookie values.
  const allCookies: Record<string, unknown> = cookies.getAll()

  // Iterating over each cookie name.
  Object.keys(allCookies).forEach((cookie) => {
    // Checking if the cookie is not in the list of cookies to retain.
    if (!['theme.mode', 'theme', 'cookie_consent'].includes(cookie)) {
      // Removing the cookie if it's not in the list of cookies to retain.
      cookies.remove(cookie, { path: '/' })
    }
  })
}
