// src/lib/api/makeAuthenticatedRequest.ts

'use client'

import Cookies from 'universal-cookie'
import refreshToken from '@/lib/api/getRefreshToken'
import { validateToken } from '../utility/validateToken'

// Define a generic type for request bodies.
type RequestBody = Record<string, unknown>

// Type for the response in case of an error.
interface ErrorResponse {
  needsRedirect: boolean
  error: string
  data?: never // Indicates `data` is not present in this response shape.
}

// Type for the response when data is successfully returned from the server.
interface SuccessResponse<Data> {
  data: Data // Use a generic type for data for flexibility.
  needsRedirect: boolean
  error?: never // Indicates `error` is not present in this response shape.
}

/**
 * A utility function to make authenticated HTTP requests with automatic token refresh.
 * @param slug The endpoint slug to append to the base API URL.
 * @param method The HTTP method to use for the request (GET, POST, PUT, DELETE).
 * @param body Optional request body. Should be an object or null.
 * @returns A promise resolving to either an ErrorResponse or a SuccessResponse.
 */
export const makeAuthenticatedRequest = async <Data = unknown>(
  slug: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: RequestBody | null
): Promise<ErrorResponse | SuccessResponse<Data>> => {
  const apiHost = process.env.NEXT_PUBLIC_API_HOST // API host URL from environment variables.
  const url = `${apiHost}${slug}` // Full URL for the request.

  const cookies = new Cookies()
  let accessToken: string | null = cookies.get('token') // Retrieve the current access token from cookies.

  // Validate and possibly refresh the access token.
  if (accessToken === null || !validateToken(accessToken)) {
    try {
      accessToken = await refreshToken()
    } catch (error) {
      console.error('Error refreshing token:', error)
      return { needsRedirect: true, error: 'Token refresh failed' }
    }
  }

  try {
    // Prepare headers for the request, including the Authorization header with the access token.
    const headers = new Headers({
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': body !== null ? 'application/json' : 'text/plain'
    })

    // Make the fetch request with the provided method, headers, and body.
    const response = await fetch(url, {
      method,
      headers,
      body: body !== null ? JSON.stringify(body) : null
    })

    // Handle non-OK response status.
    if (!response.ok) {
      return { needsRedirect: true, error: `HTTP error ${response.status}` }
    }

    // On successful response, parse the JSON body and return the data.
    const data: Data = await response.json()
    return { data, needsRedirect: false }
  } catch (error) {
    console.error('Error making authenticated request:', error)
    return { needsRedirect: true, error: 'Network or other error' }
  }
}
