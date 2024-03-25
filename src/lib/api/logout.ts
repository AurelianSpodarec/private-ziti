// src/app/lib/logout.ts

// Directive to indicate that this module is intended for client-side usage.
'use client'

// Importing the removeCookie function from '@/lib/utility/cookies'.
// This function is used to remove cookies from the browser, which is essential for logging out the user.
import { removeCookie } from '@/lib/utility/cookies'

// The logout function is an asynchronous function, defined as the default export of this module.
// It does not take any arguments and returns a Promise that resolves to void.
// The purpose of this function is to handle user logout from the application.
export default async function logout (): Promise<void> {
  // Retrieving the API host URL from the environment variables.
  // This URL serves as the base path for backend API requests.
  const apiHost = process.env.NEXT_PUBLIC_API_HOST

  // Making a GET request to the '/auth/logout' endpoint of the API.
  // This request is used for logging out the user from the server.
  const res = await fetch(`${apiHost}/auth/logout`, {
    method: 'GET', // Setting the request method as GET.
    credentials: 'include' // Including credentials such as cookies with the request, which are necessary for server-side session management.
  })

  // Removing the 'token' cookie from the browser.
  // This operation is crucial for client-side logout, ensuring the user session is terminated locally.
  removeCookie('token')

  // Checking if the response status is not one of the expected success statuses for logout.
  // In this case, we are considering both 200 (OK) and 204 (No Content) as successful responses.
  if (![200, 204].includes(res.status)) {
    // If the response status is not 200 or 204, we throw an error indicating the logout failed.
    throw new Error('Failed to log out.')
  }

  // Special handling for 204 No Content responses.
  // HTTP 204 No Content means the server processed the request successfully but is not returning any content.
  if (res.status !== 204) {
    // If the response status is not 204, we parse and return the JSON response.
    // This step can be useful if the server sends any data in response to a logout request, such as a confirmation message.
    return await res.json()
  }
  // If the status is 204, the function completes without returning anything, as there is no content to parse.
}
