'use client'

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getPropertiesList } from "@/services/apis/requests/listing/properties";
import CardProperty from "@/components/CardProperty";
import Container from "@/components/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

function DrawerFilter() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 21V14" stroke="#1D2F3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 10V3" stroke="#1D2F3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 21V12" stroke="#1D2F3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 8V3" stroke="#1D2F3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20 21V16" stroke="#1D2F3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20 12V3" stroke="#1D2F3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1 14H7" stroke="#1D2F3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 8H15" stroke="#1D2F3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 16H23" stroke="#1D2F3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span className="sr-only lg:not-sr-only">
            Filter
          </span>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">

              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {/* {goal} */}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>

            </div>
            <div className="mt-3 h-[120px]">

            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              hidden
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
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


      <div className="flex items-center justify-between">
        <Tabs defaultValue="account" className="">
          <TabsList>
            <TabsTrigger value="House">House</TabsTrigger>
            <TabsTrigger value="Appartament">Appartament</TabsTrigger>
          </TabsList>
        </Tabs>
        <div>
          <DrawerFilter />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {propertiesQuery?.data?.Properties.map((property) => {
          return <CardProperty key={property.id} data={property} />
        })}
      </div>
    </Container>
  )
}

export default Page;
