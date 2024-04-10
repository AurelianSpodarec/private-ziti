import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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

function PropertyCarouselList({ data }) {
  return (
    <CarouselContent>
      {data.map((item) => {
        return <PropertyCarouselItem image={item} />
      })}
    </CarouselContent>
  )
}

function CarouselProperty({ images }: any) {
  return (
    <Carousel className="rounded-2xl overflow-hidden h-auto z-10">
      <PropertyCarouselList data={images} />
      <CarouselPrevious className="bg-white/90 hover:bg-white hover:zoom-in-105 left-8" />
      <CarouselNext className="bg-white/90 hover:bg-white hover:zoom-in-105 right-8" />
    </Carousel>
  )
}

export default CarouselProperty
