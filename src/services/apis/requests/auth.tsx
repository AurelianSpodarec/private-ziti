// ============================================================
// API Auth
// ============================================================

import FetchZiti from '../fetch/FetchZiti'

// {
//   "hasAccount": true,
//   "accountComplete": false,
//   "emailVerified": true,
//   "audienceType": [
//       "buyer"
//   ],
//   "privateAccountData": {
//       "obfuscatedEmail": "iv•••••@gm•••••.com"
//   }
// }

// {
//   "hasAccount": false,
//   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxZjFlYWZkLThjNWQtNDZmZC1iNTAzLWI5MjhlOTg0NDg1NSIsInJvbGVzIjpbImJ1eWVyIl0sImlhdCI6MTcxNTYzMTQ0NywiZXhwIjoxNzE1NjMyMzQ3fQ.X-GOfSLXlw4GTXrOEF2hupLd3KtUDl0FN4HM_vilGH0",
//   "accountComplete": false,
//   "emailVerified": false
// }

interface IAuthLoginByEmail {
  identifier: string
  pwd: string
  rememberMe: boolean
}

interface IAuthRegisterByEmail {
  email: string
}

// Register
// ===========================================

export async function authRegisterByEmail (data: IAuthRegisterByEmail) {
  return await FetchZiti('auth/email', 'POST', data)
}

export function authRegisterByPhone () {

}

// Login
// ===========================================

export async function authLoginByEmail (data: IAuthLoginByEmail) {
  return await FetchZiti('auth/login', 'POST', data)
}

export function authLoginByPhone () {

}
