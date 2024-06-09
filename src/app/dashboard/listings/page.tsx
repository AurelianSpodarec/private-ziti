import { auth } from "@/auth"
import { getUserPropertyList } from "@/services/apis/requests/listing/properties"

function ListingBox ({ item }: any) {
  return (
    <div>
      {item.title}
    </div>
  )
}

async function Listings () {
  const session = await auth()
  // const session = auth()
  // console.log(session?.user)
  console.log("ppppp", session?.user)
  const data = await getUserPropertyList(session?.user?.id)

  console.log("listing#####################", data.Properties)



  // <Box item={session?.user?.email} />

  return (
    <div className="">
      {data?.Properties.map((item) => {
        return <ListingBox item={item} />
      })}
    </div>
  )
}

export default Listings
