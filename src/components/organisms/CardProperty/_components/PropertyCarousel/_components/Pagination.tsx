import { Badge } from '@/components/ui/badge'

interface IPropertyCarouselPagination {
  currentIndex: number
  count: number
}

function PropertyCarouselPagination ({ currentIndex, count }: IPropertyCarouselPagination) {
  return (
    <div className="mt-auto ml-auto z-10 absolute bottom-0 w-full p-4 justify-end flex">
      <Badge blur="base" opacity="base">{currentIndex} of {count}</Badge>
    </div>
  )
}

export default PropertyCarouselPagination
