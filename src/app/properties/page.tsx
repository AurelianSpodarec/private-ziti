'use client'

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getPropertiesList } from "@/services/apis/requests/listing/properties";
import CardProperty from "@/components/CardProperty";

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
