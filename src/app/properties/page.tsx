'use client'

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getPropertiesList } from "@/services/apis/requests/listing/properties";

import {
  Tabs,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import CardProperty from "@/components/organisms/CardProperty/CardProperty";
import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";

import DrawerPropertyFilter from "./_components/DrawerPropertyFilter";
import DialogPropertyFilter from "./_components/DialogPropertyFilter";

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

      <div className="flex items-center justify-between lg:hidden">
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

      <div className="flex justify-end mb-4">
        <DialogPropertyFilter />
      </div>

      <div className="flex items-center whitespace-nowrap overflow-x-auto lg:hidden">
        <Badge>Punta Cana</Badge>
        <Badge>$120,000 - $350,000</Badge>
        <Badge>2+ baths</Badge>
        <Badge>Pool</Badge>
        <Badge>Garden</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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
