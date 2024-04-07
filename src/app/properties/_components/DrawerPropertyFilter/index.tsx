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
import { ScrollArea } from "@/components/ui/scroll-area"

function FilterContainer({ name, children, row }: any) {
  return (
    <div className={`flex mb-6 ${row ? "flex-row" : "flex-col"}`}>
      <span>
        {name}
      </span>
      <div className="flex items-center">
        {children}
      </div>
    </div>
  )
}

function DrawerPropertyFilter() {
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
            Filter properties
          </span>
        </div>
      </DrawerTrigger>


      <DrawerContent className="bg-white h-full rounded-none">
        <div className="mx-auto w-full max-w-sm contents">

          <DrawerHeader className="flex items-center justify-between">
            <div className="flex">
              <DrawerTitle>Filter</DrawerTitle>
              <DrawerDescription>properties</DrawerDescription>
            </div>
            <DrawerClose>
              X
            </DrawerClose>
          </DrawerHeader>

          <section className="overflow-y-auto">

            <FilterContainer name="Sort by">
              <button>Newest</button>
              <button>Price</button>
              <button>Price</button>
              <button>A-Z</button>
              <button>Z-A</button>
            </FilterContainer>

            <FilterContainer name="Price">
              <button>House</button>
              <button>Apartament</button>
            </FilterContainer>

            <FilterContainer name="Area" row>
              <input placeholder="Min"></input>
              <input placeholder="Max"></input>
            </FilterContainer>

            <FilterContainer name="Land" row>
              <input placeholder="Min"></input>
            </FilterContainer>

          </section>


          <DrawerFooter>
            <div className="flex items-center justify-between">
              <button>Reset</button>
              <button>Apply</button>
            </div>
          </DrawerFooter>

        </div>
      </DrawerContent>

    </Drawer>
  )
}

export default DrawerPropertyFilter
