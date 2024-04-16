import Link from 'next/link'

import { type IArticle } from '@/interfaces/IBlog'
import Image from 'next/image'
import Avatar from '../atoms/Avatar'

function CardArticle ({ data }: { data: IArticle }) {
  return (
    <article>
      <Link href={`blog/${data.slug}`}>

        <Image
          src={data.imageUrl}
          alt={data.imageCaption}
          width={data.imageWidth}
          height={data.imageHeight}
        />
        <header>
          <h3>{data.title}</h3>
          <div>
            <Avatar src="https://github.com/shadcn.png" fallbackText="JD" name="John Doe" />
            <span>{data.Author.name}</span>
            <span>{data.wordCount} min read - {data.datePublished}</span>
          </div>
        </header>
      </Link>
    </article>
  )
}

export default CardArticle
