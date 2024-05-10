import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { type IArticle } from '@/interfaces/IBlog'
import { readingTime } from '@/lib/readingTime'

import UserAvatarBox from '../molecules/EmptyState/UserAvatarBox'

interface ICardArticle {
  data: IArticle
}

function CardArticle ({ data }: ICardArticle) {
  return (
    <article className="shadow bg-primary-50">
      <Link href={`articles/${data.slug}`} className={'p-4 block'}>
        <div className="relative h-[220px] md:h-[300px] overflow-hidden">
          <Image
            src={data.imageUrl}
            alt={data.imageCaption}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-full object-cover "
          />
        </div>
        <header>
          <h3 className="py-2 text-foreground-750 text-base md:text-lg lg:text-xl font-medium">{data.title}</h3>
          <UserAvatarBox
            src={data?.Author.imageUrl}
            name={data?.Author.givenName}
            fallbackText='Initials'
            subTitle={`${readingTime(data?.wordCount)} min read`}
          />
          <div>
          </div>
        </header>
      </Link>
    </article>
  )
}

export default CardArticle
