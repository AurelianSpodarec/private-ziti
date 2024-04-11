'use client'

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getPropertiesList } from "@/services/apis/requests/listing/properties";
import CardProperty from "@/components/organisms/CardProperty/CardProperty";
import Container from "@/components/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DrawerPropertyFilter from "./_components/DrawerPropertyFilter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button/button";

function NativeMobileMenu() {
  return (
    <div className="fixed left-1/2 right-1/2 bottom-4 w-full z-30 space-x-4">
      <div>

        <Button
          kind="outline"
          icon={
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L1 7L7 1" stroke="#1D2F3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          }
        />
        <Button
          kind="outline"
          icon={
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L1 7L7 1" stroke="#1D2F3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          }
        />
        <Button
          kind="outline"
          icon={
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L1 7L7 1" stroke="#1D2F3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          }
        />
        <Button
          kind="outline"
          icon={
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L1 7L7 1" stroke="#1D2F3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          }
        />
        <Button
          kind="outline"
          icon={
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L1 7L7 1" stroke="#1D2F3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          }
        />
      </div>
    </div>
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

      <NativeMobileMenu />

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
