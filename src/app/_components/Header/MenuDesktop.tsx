import ModeToggle from '@/components/atoms/ModeToggle'
import UserDropdown from '../UserDropdown'
import Link from 'next/link'

function MenuDesktop () {
  const isLogged = false

  return (
    <nav className="hidden lg:block text-sm text-white font-montserrat">
      <div className="flex items-center space-x-7">
        {/* <ModeToggle /> */}

        <div className="flex items-center justify-between space-x-2">
          {isLogged &&
            <UserDropdown />
          }
          <button className="text-black">

            <Link href={'/signin'}>

              Login Button
            </Link>
          </button>
        </div>

      </div>
    </nav>
  )
}

export default MenuDesktop
