// src/app/lib/login.ts

// Directive to indicate that this module is intended for client-side usage.
'use client'

// Importing the setCookie function from '@/lib/utility/cookies'.
// This function is utilized for setting cookies in the browser, particularly useful for managing authentication tokens.
import { setCookie } from '@/lib/utility/cookies'

// This file defines the login function.
// The purpose of this function is to handle user authentication in an application.

/**
 * Performs user authentication by sending a login request to the backend.
 *
 * @param identifier - The user's identifier (e.g., phone number or email).
 * @param password - The user's password.
 * @param rememberMe - A boolean indicating whether the user opted to be remembered on this device.
 * @returns A Promise that resolves to void (no return value).
 * @throws An error if the login process fails.
 *
 * The function sends a POST request to the server with the user's credentials.
 * It includes a 'rememberMe' field, which is used by the backend to determine
 * how long the user's session should remain active.
 *
 * If the 'rememberMe' option is true, the backend will create a session that lasts longer,
 * by setting a longer expiration time on the refresh cookie (30 days).
 * If false, the refresh cookie will expire after the user's session ends.
 * This will require the user to log in again after the current browser session is closed, enhancing security for short-term access.
 *
 * This is useful in scenarios where users are logging in from personal devices (where longer sessions might be preferred)
 * vs. public/shared devices (where security concerns dictate shorter sessions).
 *
 * Example Usage:
 *   const loginResult = await login(userEmail, userPassword, isRememberMeChecked);
 *   if (loginResult.needsRedirect) {
 *     // Handle redirection or authentication failure logic
 *   }
 */
export default async function login (identifier: string, password: string, rememberMe: boolean): Promise<void> {
  // Constructing the request body with the user's credentials and the rememberMe option.
  // The 'identifier' and 'pwd' (password) fields hold the user's login credentials.
  // The 'rememberMe' field indicates whether the user has selected the "Remember Me" option in the UI.
  const requestBody = {
    identifier,
    pwd: password,
    rememberMe
  }

  // Retrieving the API host URL from environment variables.
  // This URL is the base path for your backend API.
  const apiHost = process.env.NEXT_PUBLIC_API_HOST

  // Making a POST request to the '/auth/login' endpoint of the API.
  // This request is used for user authentication.
  const response = await fetch(`${apiHost}/auth/login`, {
    method: 'POST', // Setting the request method as POST.
    headers: {
      'Content-Type': 'application/json' // Specifying the content type as JSON.
    },
    body: JSON.stringify(requestBody), // Converting the request body object to a JSON string.
    credentials: 'include' // Including credentials such as cookies with the request.
  })

  // Checking if the HTTP response status is not OK (i.e., not in the range 200-299).
  // If it's not OK, we throw an error with the status code.
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  // Parsing the JSON response body to extract the data.
  const data = await response.json()

  // Checking if the 'accessToken' property is present in the response data.
  // If the accessToken is not present, an error is thrown.
  if (data.accessToken === undefined) {
    throw new Error('Access token is not present in the response')
  }

  // Using the setCookie utility function to set the 'token' cookie with the received access token.
  // The maxAge is set to 900 seconds (15 minutes), indicating how long the cookie will remain valid.
  setCookie('token', String(data.accessToken), 900)

  // The function doesn't explicitly return a value (void function), but it sets the cookie which is used for maintaining the user session.
  // If it completes without throwing an error, it implies the login was successful.
  // Note: Here, returning data.accessToken doesn't match the function's return type (void). If you need to use the access token after login, consider changing the function's return type.
  return data.accessToken
}
