import Link from "next/link";
import { IProperty } from "@/interfaces/IProperties";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
  "https://s3-alpha-sig.figma.com/img/4790/7b63/d9692c979f33c0eb3b2278fe275605b7?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCLGkOfHA-eYSMoNjQVY~uZyeqPR0nKC6BxYXPLcH57UMsG2BQ8JZS8SGbLMktw9G10K8JmkpJ5slwRdeSB0aNAf1TVQi1cil68BiWSafyorttukJtrN~oMDxA~CGde1jy36BwyV7sFl-kaXGGme3qwGZzDNoFAWmZKkKYVbszqk7omjnHLdRSZJ6GuvCTfGaHRCPUHT6UAlrBaV8PqLnvKicd0NOykPikJWOIMdOeyNKQJo4XJGIr03wXCm54NRg5BNcOYNY~-bj8htxBSl8ecXyYFvSAWuCRNhhzQFztuWEjGvQKOBqZDyWnE~2m5qShmbfuZLZEUnshlurV0GHQ__",
  "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-7.jpg",
]

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
    <Carousel className="rounded-2xl overflow-hidden h-auto">
      <PropertyCarouselList data={images} />
      <CarouselPrevious className="bg-white/90 hover:bg-white hover:zoom-in-105 left-8" />
      <CarouselNext className="bg-white/90 hover:bg-white hover:zoom-in-105 right-8" />
    </Carousel>
  )
}




function CardProperty({ isLoading, data }: { isLoading?: boolean, data?: IProperty }) {
  if (isLoading) {
    return (
      <article>
        IsLoading
      </article>
    )
  }
  return (
    <article className="relative isolate flex flex-col overflow-hidden rounded-2xl p-4">
      <Link href={`properties/${data?.id}`} className="h-full flex flex-col">

        <div className="absolte top-0 bottom-0 right-0 left-0">
          <CarouselProperty images={images} />
        </div>

        <div className="flex items-center justify-between z-10">
          <div>New</div>
          <button>Like</button>
        </div>

        <div className="mt-auto mb- z-10">
          <div>
            <div>{data?.Sector.name}</div>
          </div>

          <header className="bg-white rounded-3xl mt-auto p-4">
            <div className="flex justify-between items-center">
              <h3>{data?.title}</h3>
              <span>{data?.Currency}{data?.price}</span>
            </div>
            <p>{data?.description}</p>
          </header>
        </div>
      </Link>
    </article>
  )
}

export default CardProperty;
