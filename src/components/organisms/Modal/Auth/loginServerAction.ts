'use server'

import { signIn } from '@/auth'

export async function serverLoginEmaislAction () {
  // This is just an example. Replace with your actual login logic.
  const res = await signIn('credentials', {
    redirect: false,
  })
  return res
}
