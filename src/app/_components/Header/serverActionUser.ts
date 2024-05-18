'use server'

import { auth } from '@/auth'

export async function serverActionUser () {
  const res = await auth()
  return res
}
