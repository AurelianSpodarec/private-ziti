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

const fakeDataSelectedFilters = ["Punta Cana", "$120,000 - $350,000", "2+ baths", "Pool", "Garden"]

interface ISelectedFilterItem {
  name: string;
  onClick: any;
}

function SelectedFilterItem({ name, onClick }: ISelectedFilterItem) {
  return (
    <Badge
      onClick={onClick}
      label={name}
      kind="outline"
      variant="secondary"
      icon={
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 4.5L4.5 13.5" stroke="#515F68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4.5 4.5L13.5 13.5" stroke="#515F68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      }
    />
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

      <div className="justify-end mb-4 hidden lg:flex">
        <DialogPropertyFilter />
      </div>

      <div className="flex items-center whitespace-nowrap overflow-x-auto lg:hidden mb-4 space-x-2">
        {fakeDataSelectedFilters.map(item => {
          return <SelectedFilterItem name={item} onClick={console.log("click")} />
        })}
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
