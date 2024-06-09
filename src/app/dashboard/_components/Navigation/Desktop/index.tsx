import Link from "next/link"

// import IconLogo from '@/assets/IconLogo';
import { dataNavigation } from './../data-navigation'
import UserDropdownMenu from './../_components/UserDropdownMenu'
import NavItem from "./_components/NavItem"
import LogoZiti from "@/app/_components/Header/LogoZiti"

function NavigationDesktop ({ className }: { className: string }) {
  return (
    <aside className={`
      ${className}
        w-[200px]
        z-10
        fixed left-0 
        h-screen 
        bg-[#fafafa]
    `}>
      <nav className="flex flex-col items-center w-full">

        <div className="flex shrink-0 py-4 mx-auto">
          <Link href="/dashboard" className="h-8 w-8 text-white">
            {/* <LogoZiti /> */}
          </Link>
        </div>

        <div className="px-2 h-full overflow-y-auto">
          {dataNavigation && dataNavigation.map(item => {
            return <NavItem key={item.id} item={item} isActive={true} />
          })}
        </div>

        <UserDropdownMenu />

      </nav>
    </aside>
  )
}

export default NavigationDesktop
