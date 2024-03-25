// src/lib/api/makeAuthenticatedRequest.ts

// Directive to indicate that this module is intended for client-side usage.
'use client'

// Importing the Cookies class from 'universal-cookie' to manage cookies.
import Cookies from 'universal-cookie'

// Importing the refreshToken function for obtaining a new access token when the current one is invalid or expired.
import refreshToken from '@/lib/api/getRefreshToken'

// Importing validateToken function to check the validity of the current access token.
import { validateToken } from '../utility/validateToken'

/**
 * A function to make authenticated HTTP requests.
 * This function automatically handles token validation and refresh, and sends authenticated requests to the server.
 *
 * Usage example:
 * const result = await makeAuthenticatedRequest(slug, method, body);
 * if (result.needsRedirect) {
 *   // Redirect to login page or handle the need for re-authentication
 * }
**/
export const makeAuthenticatedRequest = async (
  slug: string, // The endpoint slug to append to the base API URL.
  method: 'GET' | 'POST' | 'PUT' | 'DELETE', // HTTP method to use for the request.
  body?: Record<string, any> | null // Optional request body. If provided, it should be an object or null.
): Promise<{
  needsRedirect: boolean // Flag indicating if a redirect (to login, typically) is needed.
  error: string // Error message if an error occurs.
  data?: undefined // Data is undefined in case of an error.
} | {
  data: any // The data returned from the server.
  needsRedirect: boolean // Flag for redirection, typically false when data is returned.
  error?: undefined // Error is undefined when the request is successful.
}> => {
  // Retrieve the API host URL from environment variables.
  const apiHost = process.env.NEXT_PUBLIC_API_HOST
  // Construct the full URL for the request.
  const url = `${apiHost}${slug}`

  // Instantiate a new Cookies object to manage browser cookies.
  const cookies = new Cookies()
  // Retrieve the current access token from cookies.
  let accessToken: string | null = cookies.get('token')

  // Validate the access token. If it's null or invalid, try to refresh it.
  if (accessToken === null || !validateToken(accessToken)) {
    try {
      // Attempt to refresh the token.
      accessToken = await refreshToken()
    } catch (error) {
      // If token refresh fails, log the error and indicate that a redirect is needed.
      console.error('Error refreshing token:', error)
      return { needsRedirect: true, error: 'Token refresh failed' }
    }
  }

  try {
    // Prepare the headers for the request, including the Authorization header with the access token.
    const headers = new Headers({
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': body !== null ? 'application/json' : 'text/plain'
    })

    // Make the fetch request to the server with the provided method, headers, and body.
    const response = await fetch(url, {
      method,
      headers,
      body: body !== null ? JSON.stringify(body) : null
    })

    // Check if the response status is not OK (200-299 range).
    if (!response.ok) {
      // If not OK, return an error and indicate that a redirect might be necessary.
      return { needsRedirect: true, error: `HTTP error ${response.status}` }
    }

    // On a successful response, parse the JSON body and return the data.
    return { data: await response.json(), needsRedirect: false }
  } catch (error) {
    // Catch and log any network or other errors that occur during the fetch request.
    console.error('Error making authenticated request:', error)
    // Return an error indication and a flag for potential redirection.
    return { needsRedirect: true, error: 'Network or other error' }
  }
}
