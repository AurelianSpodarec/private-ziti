import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseCookies (cookiesString) {
  const cookiePairs = cookiesString.split('; ')
  const cookies = {}
  cookiePairs.forEach(cookiePair => {
    const [key, value] = cookiePair.split('=')
    cookies[key] = value
  })

  return cookies
}

export function readingTime (words: number) {
  const wpm = 225
  const time = Math.ceil(words / wpm)
  return time
}
