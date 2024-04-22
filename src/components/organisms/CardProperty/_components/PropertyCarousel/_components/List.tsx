import {
  CarouselContent
} from '@/components/ui/carousel'

import PropertyCarouselItem from './Item'

function PropertyCarouselList ({ data }: { data: [string] }) {
  return (
    <CarouselContent>
      {data.map((item) => {
        return <PropertyCarouselItem key={item} image={item} />
      })}
    </CarouselContent>
  )
}

export default PropertyCarouselList
