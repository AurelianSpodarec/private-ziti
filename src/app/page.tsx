import BlogIndex, { metadata as blogMetadata } from './articles/page'
import type { Metadata } from 'next'

export const metadata: Metadata = blogMetadata

function Home (): JSX.Element {
  return <BlogIndex />
}

export default Home
