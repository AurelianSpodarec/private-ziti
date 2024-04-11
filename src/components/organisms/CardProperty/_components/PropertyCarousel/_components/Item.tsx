import {
  CarouselItem,
} from "@/components/ui/carousel"

function PropertyCarouselItem({ image }: { image: string }) {
  return (
    <CarouselItem className="mx-0 px-0 h-[330px]">
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover"
      />
    </CarouselItem>
  )
}

export default PropertyCarouselItem;
