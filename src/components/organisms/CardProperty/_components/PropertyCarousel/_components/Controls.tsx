import {
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

function PropertyCarouselControls () {
  return (
    <div>
      <CarouselPrevious className="bg-white/90 hover:bg-white hover:zoom-in-105 left-8" />
      <CarouselNext className="bg-white/90 hover:bg-white hover:zoom-in-105 right-8" />
    </div>
  )
}

export default PropertyCarouselControls
