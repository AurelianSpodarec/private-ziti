import React from 'react'

import {
  Carousel,
  type CarouselApi
} from '@/components/ui/carousel'

import { type IPropertyImage } from '@/interfaces/IProperties'

import PropertyCarouselList from './_components/List'
import PropertyCarouselControls from './_components/Controls'
import PropertyCarouselPagination from './_components/Pagination'

function CarouselProperty ({ images }: { images: IPropertyImage[] }) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrentIndex(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrentIndex(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel setApi={setApi} className="relative rounded-2xl overflow-hidden h-auto z-10">
      <PropertyCarouselList data={images} />
      <PropertyCarouselControls />
      <PropertyCarouselPagination currentIndex={currentIndex} count={count} />
    </Carousel>
  )
}

export default CarouselProperty
