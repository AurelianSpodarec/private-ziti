'use client'

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getPropertiesList } from "@/services/apis/requests/listing/properties";
import { IProperty } from "@/interfaces/IProperties";

function CardProperty({ data }: { data: IProperty }) {
  return (
    <article className="relative isolate flex flex-col overflow-hidden h-[330px] rounded-2xl p-4">
      <img
        src="https://s3-alpha-sig.figma.com/img/4790/7b63/d9692c979f33c0eb3b2278fe275605b7?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCLGkOfHA-eYSMoNjQVY~uZyeqPR0nKC6BxYXPLcH57UMsG2BQ8JZS8SGbLMktw9G10K8JmkpJ5slwRdeSB0aNAf1TVQi1cil68BiWSafyorttukJtrN~oMDxA~CGde1jy36BwyV7sFl-kaXGGme3qwGZzDNoFAWmZKkKYVbszqk7omjnHLdRSZJ6GuvCTfGaHRCPUHT6UAlrBaV8PqLnvKicd0NOykPikJWOIMdOeyNKQJo4XJGIr03wXCm54NRg5BNcOYNY~-bj8htxBSl8ecXyYFvSAWuCRNhhzQFztuWEjGvQKOBqZDyWnE~2m5qShmbfuZLZEUnshlurV0GHQ__"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div>
        <div>{data.Sector.name}</div>
      </div>
      <header className="bg-white rounded-3xl mt-auto p-4">
        <div className="flex justify-between items-center">
          <h3>{data.title}</h3>
          <span>{data.Currency}{data.price}</span>
        </div>
        <p>{data.description}</p>
      </header>
    </article>
  )
}

function Page() {

  const propertiesQuery = useQuery({
    queryKey: ["properites"],
    queryFn: () => getPropertiesList()
  })

  useEffect(() => {
    console.log(propertiesQuery.data?.Properties)
  }, [propertiesQuery.data])

  return (
    <div className="container px-6">
      Listing

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {propertiesQuery?.data?.Properties.map((property) => {
          return <CardProperty key={property.id} data={property} />
        })}
      </div>
    </div>
  )
}

export default Page;
