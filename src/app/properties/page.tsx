'use client'

import { useQuery } from "@tanstack/react-query";
import { getPropertiesList } from "@/services/apis/requests/listing/properties";

import {
  Tabs,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import CardProperty from "@/components/organisms/CardProperty/CardProperty";
import Container from "@/components/Container";

import DrawerPropertyFilter from "./_components/DrawerPropertyFilter";
import DialogPropertyFilter from "./_components/DialogPropertyFilter";
import SelectedFilterItem from "./_components/SelectedFilterItem";

const fakeDataSelectedFilters = ["Punta Cana", "$120,000 - $350,000", "2+ baths", "Pool", "Garden"]

function Page() {

  const propertiesQuery = useQuery({
    queryKey: ["properites"],
    queryFn: () => getPropertiesList()
  })

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
          return <SelectedFilterItem key={item} name={item} onClick={() => console.log("click")} />
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
