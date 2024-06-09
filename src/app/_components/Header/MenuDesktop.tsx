'use client'

import { Button } from '@/components/ui/button'
import UserDropdown from '../UserDropdown'
import useModal from '@/context/modal/useModal'
import Link from 'next/link'
import LogoZiti from './LogoZiti'
import { usePathname, useRouter } from 'next/navigation'

function MenuDesktop ({ session }) {
  const { openModal } = useModal()

  // const pathname = usePathname()
  // const router = useRouter()

  // // Check if the current path starts with '/dashboard'
  // const isDashboard = router.pathname.startsWith('/dashboard')
  // console.log(pathname)

  return (
    <div className="flex justify-between align-center w-full">
      <Link href="/" className="flex flex-[1_0_140px]">
        <LogoZiti />
        <span className="sr-only">Ziti</span>
      </Link>

      {/* {!isDashboard && ( */}
      <nav className="hidden lg:flex text-sm justify-center w-full flex-[0_1_auto]">
        <div className="flex items-center align-center text-center space-x-2">
          <Link href="/" className="text-foreground">
            Stays
          </Link>
          <Link href="/" className="text-foreground">
            Experiences
          </Link>
          <Link href="/" className="text-foreground">
            Online Experiences
          </Link>
        </div>
      </nav>
      {/* )} */}


      <div className="flex items-center justify-between space-x-2 flex-[1_0_140px]">
        {session?.user?.id
          ?
          <>
            <UserDropdown session={session} />
          </>
          :
          <>
            <Button kind="outline" onClick={() => openModal()}>Sign in</Button>
            <Button onClick={() => openModal()}>Login</Button>
          </>
        }
      </div>
    </div >
  )
}

export default MenuDesktop
