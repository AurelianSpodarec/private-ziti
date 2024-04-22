export function readingTime (words: number) {
  const wpm = 225
  const time = Math.ceil(words / wpm)
  return time
}
