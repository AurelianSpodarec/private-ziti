import { Button } from "@/components/ui/button"
import Link from "next/link"

function RoomItemNav ({ name }: { name: string }) {
  return (
    <div>
      <span>{name}</span>
    </div>
  )
}

// For property
const menuList = [
  {
    id: "overview",
    name: "Overview",
    href: "overview",
  },
  {
    id: "info",
    name: "Info",
    href: "info",
  },
  {
    id: "photos",
    name: "Photos",
    href: "photos",
  },
  {
    id: "amenities",
    name: "Amenities",
    href: "amenities",
  },
  {
    id: "settngs",
    name: "Settngs",
    href: "settngs",
  }
]

// for room: have photo and such

function MenuItem ({ item }: any) {
  return (
    <Link href={item.href}>{item.name}</Link>
  )
}

function MenuContainer () {
  return (
    <div>
      {menuList.map((item) => {
        return <MenuItem item={item} />
      })}
    </div>
  )
}

function ListingPage () {
  return (
    <div className="flex">
      <nav className="flex flex-col flex-[0_1_200px] ">
        <div>
          <h3>House Name</h3>
          <p>New York, USA</p>
        </div>

        <div className="flex items-center justify-between">
          <h3>Rooms 4</h3>
          <Button>+</Button>
        </div>

        <div>
          <RoomItemNav name="Standard Room" />
          <RoomItemNav name="Kitchen" />
          <RoomItemNav name="Living Room" />
        </div>
      </nav>
      <section className="flex w-full">

        <div>
          <div>
            <h1>House Name</h1>
            [edit]
          </div>
          <nav>
            <MenuContainer />
          </nav>
          <div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default ListingPage
