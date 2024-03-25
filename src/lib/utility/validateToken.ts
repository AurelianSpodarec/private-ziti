// src/lib/utility/validateToken.ts

// This file contains the validateToken function.
// The purpose of this function is to validate JWT (JSON Web Tokens) tokens.
// It checks whether the token is valid based on its expiration time.

// Importing the jwtDecode function and the JwtPayload type from the 'jwt-decode' package.
// jwtDecode is used to decode the JWT token and extract its payload.
// JwtPayload is a type definition that represents the structure of the payload in the JWT token.
import { jwtDecode, type JwtPayload } from 'jwt-decode'

/**
 * Validates a JWT token.
 *
 * @param token - The JWT token to be validated.
 * @returns A boolean indicating whether the token is valid.
 *
 * The function works by decoding the token and checking its expiration time.
 *
 * Process:
 * 1. The function tries to decode the provided JWT token using jwtDecode.
 * 2. It then checks if the 'exp' field (which represents the expiration time) is present and is a number.
 * 3. If 'exp' is present, the function compares the current timestamp with the 'exp' timestamp.
 *    - If the current timestamp is less than 'exp', the token is considered valid (not expired), and true is returned.
 *    - If the current timestamp is greater than or equal to 'exp', the token is considered expired, and false is returned.
 * 4. If the 'exp' field is not present, the token is treated as invalid, and false is returned.
 * 5. If an error occurs during the decoding process (e.g., if the token is malformed), false is also returned.
 *
 * Usage:
 *   This function is typically used in authentication middleware or wherever token validation is necessary.
 *   It helps in ensuring that the user's session or API request is authenticated using a valid, unexpired token.
 *
 * Example:
 *   const isTokenValid = validateToken(userToken);
 *   if (!isTokenValid) {
 *     // Handle the case of an invalid or expired token (e.g., prompt re-authentication or log out the user)
 *   }
 */
export const validateToken = (token: string): boolean => {
  try {
    // Decoding the JWT token to extract its payload.
    const decoded = jwtDecode<JwtPayload>(token)

    // Checking if the 'exp' field (expiration time) is present in the token's payload.
    // The 'exp' field is a Unix timestamp (number of seconds since the Unix epoch) representing the token's expiration time.
    if (typeof decoded.exp === 'number') {
      // Comparing the current Unix timestamp (in seconds) with the token's 'exp' value.
      // If the current timestamp is less than 'exp', the token is not expired, and true (valid) is returned.
      // If the current timestamp is greater or equal to 'exp', the token is expired, and false (invalid) is returned.
      return decoded.exp >= Date.now() / 1000
    }

    // If the 'exp' field is not present in the token's payload, we treat the token as invalid and return false.
    return false
  } catch (e) {
    // Catching any errors that occur during the decoding process.
    // If an error occurs (e.g., token is malformed), we treat the token as invalid and return false.
    return false
  }
}
