import Image from 'next/image'
import { type IPropertyImage } from '@/interfaces/IProperties'
import { CarouselItem } from '@/components/ui/carousel'

function PropertyCarouselItem ({ image }: { image: IPropertyImage }) {
  return (
    <CarouselItem className="mx-0 px-0 h-[330px]">
      <Image
        src={image?.url}
        alt={image?.description}
        width={0}
        height={0}
        sizes="100vw"
        className="h-full w-full object-cover"
      />
    </CarouselItem>
  )
}

export default PropertyCarouselItem
