import Link from 'next/link'
import { dataNavigation } from './../data-navigation'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"

function MobileNavigation ({ isOpen, onClose }: { isOpen: boolean, onClose: any }) {
  return (
    <Sheet open={isOpen}>
      <SheetContent className="bg-[#181818]">
        {dataNavigation && dataNavigation.map(item => {
          return (
            <Link href={`/dashboard/${item.url}`} key={item.id} className="inline-flex text-white hover:bg-gray-200 p-2">
              <div className="max-w-[30px]">
                {item.icon}
              </div>
              <span>{item.name}</span>
            </Link>
          )
        })}
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavigation
