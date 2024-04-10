import Link from "next/link";
import { IProperty } from "@/interfaces/IProperties";
import CarouselProperty from "./_components/PropertyCarousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// TODO: Remove once the images are inside the database; used temporarly to simulate the images
const images = [
  "https://mygate.com/wp-content/uploads/2023/07/110.jpg",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
  "https://s3-alpha-sig.figma.com/img/4790/7b63/d9692c979f33c0eb3b2278fe275605b7?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCLGkOfHA-eYSMoNjQVY~uZyeqPR0nKC6BxYXPLcH57UMsG2BQ8JZS8SGbLMktw9G10K8JmkpJ5slwRdeSB0aNAf1TVQi1cil68BiWSafyorttukJtrN~oMDxA~CGde1jy36BwyV7sFl-kaXGGme3qwGZzDNoFAWmZKkKYVbszqk7omjnHLdRSZJ6GuvCTfGaHRCPUHT6UAlrBaV8PqLnvKicd0NOykPikJWOIMdOeyNKQJo4XJGIr03wXCm54NRg5BNcOYNY~-bj8htxBSl8ecXyYFvSAWuCRNhhzQFztuWEjGvQKOBqZDyWnE~2m5qShmbfuZLZEUnshlurV0GHQ__",
  "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-7.jpg",
]

interface ICardProperty {
  isLoading?: boolean;
  data?: IProperty;
  isNew?: boolean;
  underConstruction?: boolean;
  propertyStatus: "available" | "new" | "construction";
}

function CardProperty({ isLoading, data }: ICardProperty) {

  if (isLoading) {
    return (
      <article>
        IsLoading
      </article>
    )
  }

  //TODO: Add TypeScript
  const classPropertyStatus = {
    available: "",
    new: "bg-green-550 bg-opacity-60",
    "pre-construction": "bg-blue-550 bg-opacity-75"
  }

  return (
    <article className="relative isolate flex flex-col">
      <Link href={`properties/${data?.id}`} className="h-full flex flex-col relative">

        <div className="h-[330px] p-4">
          <div className="absolute top-0 right-0 bottom-0 left-0 ">
            <CarouselProperty images={images} />
          </div>

          <div className="relative h-full flex">
            <div className="absolute w-full z-10">
              <div className="flex items-center justify-between z-10">

                {/* TODO: Add TypeScript */}
                {data?.PropertyStatus.statusName !== "available" &&
                  <Badge className={`${classPropertyStatus[data?.PropertyStatus.statusName]} backdrop-blur-sm bg-opacity-60`}>{data?.PropertyStatus.statusName}</Badge>
                }
                <Button className="ml-auto">Like</Button>
              </div>
            </div>

            <div className="mt-auto z-10 absolute bottom-0 w-full">
              <Badge blur="base" opacity="base">{data?.Sector.name}</Badge>
            </div>
          </div>

        </div>

        <header className="bg-white rounded-3xl mt-auto">
          <div className="flex justify-between items-center">
            <h3 className="text-base md:text-lg lg:text-lg text-primary">{data?.title}</h3>
            <span className="text-base md:text-lg text-jungleGreen-800">{data?.Currency}{data?.price}</span>
          </div>
          <p className="text-sm text-foreground-250">{data?.description}</p>
        </header>

      </Link>
    </article>
  )
}

export default CardProperty;
