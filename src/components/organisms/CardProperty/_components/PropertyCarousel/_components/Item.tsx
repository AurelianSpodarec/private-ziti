import {
  CarouselItem
} from '@/components/ui/carousel'
import Image from 'next/image'

function PropertyCarouselItem ({ image }: { image: string }) {
  return (
    <CarouselItem className="mx-0 px-0 h-[330px]">
      <Image
        src={image}
        alt=""
        className="h-full w-full object-cover"
      />
    </CarouselItem>
  )
}

export default PropertyCarouselItem
