'use client'

import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import { getPropertySingle } from '@/services/apis/requests/listing/properties'
import Container from '@/components/Container'
import Image from 'next/image'

// const property = {
//   squareFeet: {
//     name: '',
//     icon: ''
//   },
//   bathrooms: {
//     name: 'Bath',
//     icon: ''
//   },
//   bedrooms: {
//     name: 'Beds',
//     icon: ''
//   }
// }

// type amenities = ['backyard', 'parking', 'pool', 'jacuzzi', 'terrace', 'elevator', 'airConditioning']

function PropertySingle () {
  const { id } = useParams()

  const dataQuery = useQuery({
    queryKey: [`properties/${String(id)}`],
    queryFn: async () => await getPropertySingle(String(id))
  })

  const item = dataQuery?.data?.Property
  console.log(item)

  if (!item) return
  return (
    <div className="mt-12">

      <Container className="max-w-screen-xl">
        <div>
          <div className="h-[500px] w-full flex gap-6">
            <div className="relative h-full w-full w-[70%]">
              <Image src={item?.images[0].url} alt={item?.images[0].description} className="w-full h-full rounded-lg" fill />
            </div>
            <div className="flex flex-col gap-6 w-[30%]">
              <div className="relative h-1/2 w-full">
                <Image src={item?.images[1].url} alt={item?.images[1].description} className="w-full h-full rounded-lg" fill />
              </div>
              <div className="relative h-1/2 w-full">
                <Image src={item?.images[2].url} alt={item?.images[2].description} className="w-full h-full rounded-lg" fill />
              </div>
            </div>
          </div>
        </div>
      </Container>


      <div>

        <Container className="max-w-screen-xl">
          <div className="flex">

            <div className="flex w-2/3">
              <section>
                <h1 className="text-2xl">{item?.title}</h1>
                <p>{item?.description}</p>
              </section>
            </div>
            <div className="flex w-1/3">

            </div>
          </div>
        </Container>

        <Container className="max-w-screen-xl">
          <h2 className="text-2xl">Location</h2>
          <img src="https://i.ibb.co/q5WXRXr/image.png" className="w-full h-[460px]" />
        </Container>
      </div>

    </div>
  )
}

export default PropertySingle


{/* <header>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">{item?.title}</h1>
          <span>{item?.Currency}{item?.price}</span>
          </div>
          <p>{item?.description}</p>
        </header> */}

{/* <div>
        <div> */}
{/* <img
            src="https://s3-alpha-sig.figma.com/img/9826/f460/2a20e4e3027cc63078eee950ce7ef7b0?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CheQKRYxg-Tr10AH4SfbZccxM~mdQUmvjvFIsukUv1Ucd6dvMyTHr5Rn2p9PhdlNIfyN4U6ui5GDAyAwH4eqhB7eNJhEsNBLwjG-9j4JhPoaFRv8WWDMclxRR~cEAPD9gee62U~2WDiJ033DVswWe31xPIZwm~~EZqbb5n8zp7~FRe6uqtvLB~7LWmzPrDKUtW2MUKotzvvITwEdWSmScYLjL6qbpz3PR9c8RPAzOEursfNqFw4D9qyWeaNZ69kZpnkK~2qGwcydE-uoSywipUM9YKZ9wAarzvLX99kJOw3fhklMxs3Jiy50NvdXu38TmLwx9yx94lJrZrX9GLkMcA__"
            className="h-10 w-10"
          /> */}
{/* <div>
            <span>Listed by NAME SURNAME</span>
            <span>At BestReal</span>
            </div>
            </div>
            <div>
            Arrow
            </div>
            </div>
            
            <div>
            <h3>Highlights</h3>
            </div>
            
            <div>
            <h3>Property Details</h3>
            </div>
            
            <div>
        <h3>Post Information</h3>
        <div>
        Posted At: {item?.createdAt}
        Updated At: {item?.updatedAt}
        Report Listing
        </div>
      </div> */}
