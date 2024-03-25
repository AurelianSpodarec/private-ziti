// src/lib/api/getRefreshToken.ts

// Directive to indicate that this module is intended for client-side usage.
'use client'

// Importing the setCookie function from a utility module.
// This function is used to set cookies in the browser.
import { setCookie } from '@/lib/utility/cookies'

// The refreshToken function is an asynchronous function, which means it returns a promise.
// The promise, when resolved, will either return a string (the refreshed access token) or null.
export const refreshToken = async (): Promise<string | null> => {
  // Retrieving the API host URL from environment variables.
  // This is the base URL for your backend/api server.
  const apiHost = process.env.NEXT_PUBLIC_API_HOST

  // Check if the API host is defined in the environment variables.
  // If not, we throw an error as the API host is essential for making the API call.
  if (apiHost === undefined) {
    throw new Error('API host is not defined')
  }

  // A try-catch block is used for error handling.
  try {
    // Making an asynchronous HTTP request (fetch) to the API server to refresh the token.
    // The path '/auth/refresh' is appended to the base API URL.
    // The 'credentials: "include"' option ensures that cookies are included with the request,
    // which is necessary for authentication in most cases.
    const response = await fetch(`${apiHost}/auth/refresh`, {
      credentials: 'include'
    })

    // Check if the HTTP response status is not OK (i.e., not in the range 200-299).
    // If it's not OK, we throw an error with the response status.
    if (!response.ok) {
      throw new Error(`HTTP status: ${response.status}`)
    }

    // Parsing the JSON response body to get the data.
    // This is an asynchronous operation.
    const data = await response.json()

    // Check if the data object has the 'accessToken' property.
    // If the accessToken is not present, throw an error.
    if (data.accessToken === undefined) {
      throw new Error('Access token is not present in the response')
    }

    // Calling the setCookie utility function to set the 'token' cookie with the new access token.
    // The third argument '900' sets the maxAge of the cookie, which determines how long (in seconds)
    // the cookie will be valid. In this case, it's set for 900 seconds (15 minutes).
    setCookie('token', String(data.accessToken), 900)

    // Return the new access token.
    return data.accessToken
  } catch (error) {
    // If any error occurs during the try block, it is caught here.
    // The error is logged to the console for debugging purposes.
    console.error('(getRefreshToken):', error)
  }

  // If the function fails to get a new token (for example, if an error occurs),
  // it returns null. This indicates that the token refresh process was unsuccessful.
  return null
}

// Export the refreshToken function as the default export of this module.
export default refreshToken
