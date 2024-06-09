import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// For property
const menuList = [
  {
    id: "overview",
    name: "Overview",
    slug: "overview",
  },
  {
    id: "info",
    name: "Info",
    slug: "info",
  },
  {
    id: "photos",
    name: "Photos",
    slug: "photos",
  },
  {
    id: "amenities",
    name: "Amenities",
    slug: "amenities",
  },
  {
    id: "settngs",
    name: "Settngs",
    slug: "settngs",
  }
]

// for room: have photo and such

function MenuItem ({ name, url }: any) {
  return (
    <Link href={url}>{name}</Link>
  )
}

function MenuContainer () {
  return (
    <div>
      {menuList.map((item) => {
        const url = `${item.slug}`
        return <MenuItem name={item.name} url={url} />
      })}
    </div>
  )
}

function IconEdit () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-icon="pen-to-square"
      data-prefix="far"
      fontSize="14"
      viewBox="0 0 512 512"
      style={{ height: 14, width: 14 }}
    >
      <path
        fill="currentColor"
        d="M373.1 24.97c28.1-28.117 73.7-28.117 101.8 0L487 37.09c28.1 28.12 28.1 73.71 0 101.81L289.8 336.2c-8.7 8.6-19.4 14.9-31.2 18.3l-100 28.6c-8.4 2.4-17.4 0-23.6-7-6.1-5.3-8.5-14.3-6.1-22.7l28.6-100c3.4-11.8 9.7-22.5 18.3-31.2L373.1 24.97zm67 33.94c-8.5-9.37-23.7-9.37-33.1 0L377.9 88l46.1 46.1 29.1-30c9.4-8.5 9.4-23.7 0-33.07l-13-12.12zM203.7 266.6l-16.8 58.5 58.5-16.8c4-1.1 7.5-3.2 10.4-6.1L390.1 168 344 121.9 209.8 256.2c-2.9 2.9-5 6.4-6.1 10.4zM200 64c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24H88c-22.09 0-40 17.9-40 40v272c0 22.1 17.91 40 40 40h272c22.1 0 40-17.9 40-40V312c0-13.3 10.7-24 24-24s24 10.7 24 24v112c0 48.6-39.4 88-88 88H88c-48.6 0-88-39.4-88-88V152c0-48.6 39.4-88 88-88h112z"
      ></path>
    </svg>
  )
}

function ListingPage ({ children }) {
  return (
    <div className="flex">
      {/* <nav className="flex flex-col flex-[0_1_200px] "> */}
      {/* <div>
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
        </div> */}
      {/* </nav> */}
      <section className="flex w-full">

        <div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold">House Name</h1>
              <IconEdit />
            </div>
            <Badge>Published</Badge>
          </div>
          <nav>
            <MenuContainer />
          </nav>
          <div>
            {children}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ListingPage
