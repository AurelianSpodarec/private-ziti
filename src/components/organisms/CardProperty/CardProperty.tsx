import Link from "next/link";
import { IProperty } from "@/interfaces/IProperties";
import CarouselProperty from "./_components/PropertyCarousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button/button";
import Skeleton from "@/components/atoms/Skeleton";

// TODO: Remove once the images are inside the database; used temporarly to simulate the images
const images = [
  "https://mygate.com/wp-content/uploads/2023/07/110.jpg",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
  "https://s3-alpha-sig.figma.com/img/4790/7b63/d9692c979f33c0eb3b2278fe275605b7?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCLGkOfHA-eYSMoNjQVY~uZyeqPR0nKC6BxYXPLcH57UMsG2BQ8JZS8SGbLMktw9G10K8JmkpJ5slwRdeSB0aNAf1TVQi1cil68BiWSafyorttukJtrN~oMDxA~CGde1jy36BwyV7sFl-kaXGGme3qwGZzDNoFAWmZKkKYVbszqk7omjnHLdRSZJ6GuvCTfGaHRCPUHT6UAlrBaV8PqLnvKicd0NOykPikJWOIMdOeyNKQJo4XJGIr03wXCm54NRg5BNcOYNY~-bj8htxBSl8ecXyYFvSAWuCRNhhzQFztuWEjGvQKOBqZDyWnE~2m5qShmbfuZLZEUnshlurV0GHQ__",
  "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-7.jpg",
  "https://loveincorporated.blob.core.windows.net/contentimages/gallery/574bc9b2-d0e0-43e3-aa71-33287a758b15-f932a3fb-4621-4e69-967c-10151ecf7b28-la-mega-mansion-underground-secret.jpg",
  "https://metro.co.uk/wp-content/uploads/2019/09/PRI_86925433.jpg?quality=90&strip=all",
  "https://ap.rdcpix.com/5aa9e4f65840eb123875a248b53ca80dl-m1667282403od-w480_h360.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJsYSkBRcPrU-M3vv4a-YEcVv1IGQJF0upfsh4AnmtOiFRNNmaRdtf9v8HpPJkCZ92k8&usqp=CAU",
  "https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/c631445b62dd159b3a59ca4ec8c277b4-full.jpg",
  "https://i.pinimg.com/originals/4d/e1/f8/4de1f83293c5786d62f838387244b485.jpg",
  "https://media.istockphoto.com/id/1391605300/photo/colorful-orange-residential-home-or-house-in-puerto-rico.jpg?s=612x612&w=0&k=20&c=cI-nRl5IB2IGQ0YwyXXIDO3W0xlRDg-XiAjGHNZ3b3o=",
  "https://cdn.hometogo.net/large/e_v5/55a/724/ead310553a369da4dff0b2b16f.jpg",
  "https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/35865cc9430e430cb537515e9e1bc190-full.jpg",
  "https://ap.rdcpix.com/35fe40062461880943f95c882a6406a3l-m3114675221od-w480_h360.jpg"
]

// TODO: Remove once real data is in the listings
const getShuffledArr = (arr: [string]) => {
  const newArr = arr.slice()
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr
};

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
        <Skeleton type="image" className="h-[330px]" />
        <div className="flex items-center justify-between">
          <Skeleton variant="rectangular" className="w-[30%] h-4" />
          <Skeleton variant="rectangular" className="w-20 h-4" />
        </div>
        <Skeleton variant="rectangular" className="w-[60%] h-4" />
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
            <CarouselProperty images={getShuffledArr(images)} />
          </div>

          <div className="relative h-full flex">
            <div className="absolute w-full z-10">
              <div className="flex items-center justify-between z-10">

                {/* TODO: Add TypeScript */}
                {data?.PropertyStatus.statusName !== "available" &&
                  <Badge className={`${classPropertyStatus[data?.PropertyStatus.statusName]} backdrop-blur-sm bg-opacity-60`}>
                    {data?.PropertyStatus.statusName}
                  </Badge>
                }
                <Button className="ml-auto rounded-full" variant="clean" kind="glass">
                  <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8382 2.60987C20.3274 2.09888 19.721 1.69352 19.0535 1.41696C18.3861 1.14039 17.6707 0.998047 16.9482 0.998047C16.2257 0.998047 15.5103 1.14039 14.8428 1.41696C14.1754 1.69352 13.5689 2.09888 13.0582 2.60987L11.9982 3.66987L10.9382 2.60987C9.90647 1.57818 8.5072 0.998582 7.04817 0.998582C5.58913 0.998582 4.18986 1.57818 3.15817 2.60987C2.12647 3.64156 1.54688 5.04084 1.54688 6.49987C1.54687 7.95891 2.12647 9.35818 3.15817 10.3899L4.21817 11.4499L11.9982 19.2299L19.7782 11.4499L20.8382 10.3899C21.3492 9.87912 21.7545 9.27269 22.0311 8.60523C22.3076 7.93777 22.45 7.22236 22.45 6.49987C22.45 5.77738 22.3076 5.06198 22.0311 4.39452C21.7545 3.72706 21.3492 3.12063 20.8382 2.60987V2.60987Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span className="sr-only">Like</span>
                </Button>
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
