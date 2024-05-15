import { type IPropertyImage } from '@/interfaces/IProperties'
import { CarouselContent } from '@/components/ui/carousel'
import PropertyCarouselItem from './Item'

function PropertyCarouselList ({ data }: { data: IPropertyImage[] }) {
  return (
    <CarouselContent>
      {data.map((item) => {
        return <PropertyCarouselItem key={item?.id} image={item} />
      })}
    </CarouselContent>
  )
}

export default PropertyCarouselList
