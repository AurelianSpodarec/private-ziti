import Link from 'next/link'

import Image from 'next/image'

import { type IArticle } from '@/interfaces/IBlog'
import UserAvatarBox from '../molecules/EmptyState/UserAvatarBox'
import { readingTime } from '@/lib/readingTime'

import React, { useState, useEffect } from 'react'

interface ICardArticle {
  data: IArticle
  featured: boolean
}

function CardArticle ({ data, featured = false }: ICardArticle) {
  return (
    <article className="shadow bg-primary-50">
      <Link href={`blog/${data.slug}`} className={`p-4 block ${featured ? 'flex flex-row grid grid-cols-2' : ''} `}>
        <div className="relative h-[220px] md:h-[300px] overflow-hidden">
          <Image
            src={data.imageUrl}
            alt={data.imageCaption}
            layout="fill"
            objectFit="cover"
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
            {/* {featured && */}
            {/* // { data.excerpt } */}
            {/* // } */}
          </div>
        </header>
      </Link>
    </article>
  )
}

export default CardArticle
