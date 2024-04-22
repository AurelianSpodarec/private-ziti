'use client'

import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import { getPropertySingle } from '@/services/apis/requests/listing/properties'

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

  const data = dataQuery?.data

  return (
    <div>
      {/* <img
        src="https://s3-alpha-sig.figma.com/img/4790/7b63/d9692c979f33c0eb3b2278fe275605b7?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCLGkOfHA-eYSMoNjQVY~uZyeqPR0nKC6BxYXPLcH57UMsG2BQ8JZS8SGbLMktw9G10K8JmkpJ5slwRdeSB0aNAf1TVQi1cil68BiWSafyorttukJtrN~oMDxA~CGde1jy36BwyV7sFl-kaXGGme3qwGZzDNoFAWmZKkKYVbszqk7omjnHLdRSZJ6GuvCTfGaHRCPUHT6UAlrBaV8PqLnvKicd0NOykPikJWOIMdOeyNKQJo4XJGIr03wXCm54NRg5BNcOYNY~-bj8htxBSl8ecXyYFvSAWuCRNhhzQFztuWEjGvQKOBqZDyWnE~2m5qShmbfuZLZEUnshlurV0GHQ__"
        alt=""
      /> */}

      <header>
        <div className="flex justify-between items-center">
          <h1>{data?.title}</h1>
          <span>{data?.Currency}{data?.price}</span>
        </div>
        <p>{data?.description}</p>
      </header>

      <div>
        <div>
          {/* <img
            src="https://s3-alpha-sig.figma.com/img/9826/f460/2a20e4e3027cc63078eee950ce7ef7b0?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CheQKRYxg-Tr10AH4SfbZccxM~mdQUmvjvFIsukUv1Ucd6dvMyTHr5Rn2p9PhdlNIfyN4U6ui5GDAyAwH4eqhB7eNJhEsNBLwjG-9j4JhPoaFRv8WWDMclxRR~cEAPD9gee62U~2WDiJ033DVswWe31xPIZwm~~EZqbb5n8zp7~FRe6uqtvLB~7LWmzPrDKUtW2MUKotzvvITwEdWSmScYLjL6qbpz3PR9c8RPAzOEursfNqFw4D9qyWeaNZ69kZpnkK~2qGwcydE-uoSywipUM9YKZ9wAarzvLX99kJOw3fhklMxs3Jiy50NvdXu38TmLwx9yx94lJrZrX9GLkMcA__"
            className="h-10 w-10"
          /> */}
          <div>
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
          Posted At: {data?.createdAt}
          Updated At: {data?.updatedAt}
          Report Listing
        </div>
      </div>

    </div>
  )
}

export default PropertySingle
