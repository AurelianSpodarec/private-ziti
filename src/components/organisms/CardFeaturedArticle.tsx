import Link from 'next/link'

import Image from 'next/image'

import { type IArticle } from '@/interfaces/IBlog'
import React, { useState, useEffect } from 'react'

interface ICardFeaturedArticle {
  data: IArticle
}

function CardFeaturedArticle ({ data }: ICardFeaturedArticle) {
  return (
    <article className="shadow bg-primary-50">
      <Link href={`blog/${data.slug}`} className="flex flex-row grid grid-cols-2">
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

export default CardFeaturedArticle
