// ============================================================
// API User
// ============================================================
import FetchZiti from "../fetch/FetchZiti"

// User
// ============================================================
export async function getUserprofile (bearerToekn: string) {
  return await FetchZiti('users/profile', 'GET', undefined, undefined, bearerToekn)
}
