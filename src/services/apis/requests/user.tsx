// ============================================================
// API User
// ============================================================
import FetchZiti from "../fetch/FetchZiti"

// User
// ============================================================
export async function getUserprofile () {
  return await FetchZiti('users/profile', 'GET')
}
