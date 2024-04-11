import React from "react"

import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

import PropertyCarouselList from "./List"

function CarouselProperty({ images }: any) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // TODO: Put Buttons and slide count into separate components
  return (
    <Carousel setApi={setApi} className="relative rounded-2xl overflow-hidden h-auto z-10">
      <PropertyCarouselList data={images} />

      <CarouselPrevious className="bg-white/90 hover:bg-white hover:zoom-in-105 left-8" />
      <CarouselNext className="bg-white/90 hover:bg-white hover:zoom-in-105 right-8" />

      <div className="mt-auto ml-auto z-10 absolute bottom-0 w-full p-4 justify-end flex">
        <Badge blur="base" opacity="base">{current} of {count}</Badge>
      </div>
    </Carousel>
  )
}

export default CarouselProperty
