'use client'

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getPropertiesList } from "@/services/apis/requests/listing/properties";
import CardProperty from "@/components/organisms/CardProperty/CardProperty";
import Container from "@/components/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DrawerPropertyFilter from "./_components/DrawerPropertyFilter";




function Page() {

  const propertiesQuery = useQuery({
    queryKey: ["properites"],
    queryFn: () => getPropertiesList()
  })

  useEffect(() => {
    console.log(propertiesQuery.data?.Properties)
  }, [propertiesQuery.data])

  return (
    <Container>


      <div className="flex items-center justify-between">
        <Tabs defaultValue="account" className="">
          <TabsList>
            <TabsTrigger value="House">House</TabsTrigger>
            <TabsTrigger value="Appartament">Appartament</TabsTrigger>
          </TabsList>
        </Tabs>
        <div>
          <DrawerPropertyFilter />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {propertiesQuery.isLoading ?
          [...Array(9)].map((_, index) => {
            return <CardProperty key={index} isLoading={true} />
          })
          :
          propertiesQuery?.data?.Properties.map((property) => {
            return <CardProperty key={property.id} data={property} />
          })
        }
      </div>
    </Container>
  )
}

export default Page;
