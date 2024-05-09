import Link from 'next/link'

import Image from 'next/image'

import { type IArticle } from '@/interfaces/IBlog'
import React, { useState, useEffect } from 'react'
import { Button } from '../ui/button'

interface ICardFeaturedArticle {
  data: IArticle
}

function CardFeaturedArticle ({ data }: ICardFeaturedArticle) {
  return (
    <article className="shadow bg-primary-50">
      <Link href={`blog/${data.slug}`} className="block xl:flex p-4 xl:p-8">
        <div className="relative h:-[266px] sm:h-[360] md:h-[528px] xl:h-[480px] w-full xl:w-[70%] overflow-hidden mb-8 xl:mb-0">
          <Image
            src={data.imageUrl}
            alt={data.imageCaption}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <header className="z-10 relative w-full xl:w-[30%] xl:p-8 flex">
          <div className="my-auto">

            <h3 className="text-foreground-750 text-base md:text-xl lg:text-2xl font-medium">
              {/* {data.title} */}
              Why you should check Punta Cana real estate in 2024.
            </h3>

            <p className="py-4 xl:py-8">
              Punta Cana presents a compelling opportunity: a thriving real estate market.
              {/* {data.excerpt} */}
            </p>
            <Button
              icon={
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8.5H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.0002 3.5L14 8.5L9.0001 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              iconPosition="right"
            >
              Read Article
            </Button>
          </div>

        </header>
      </Link>
    </article >
  )
}

export default CardFeaturedArticle
