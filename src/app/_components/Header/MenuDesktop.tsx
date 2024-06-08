'use client'

import { Button } from '@/components/ui/button'
import UserDropdown from '../UserDropdown'
import { auth } from '@/auth'
import { serverActionUser } from './serverActionUser'
import { useEffect, useState } from 'react'
import useModal from '@/context/modal/useModal'
import { getUserprofile } from '@/services/apis/requests/user'

function MenuDesktop ({ session }) {

  // const [user, setUser] = useState({})

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const user = await serverActionUser()
  //     setUser(user)
  //     // const a = await getUserprofile()
  //     // console.log("a", a)
  //   }

  //   fetchData()
  // }, [])

  const { openModal } = useModal()
  // if (!user.id) return
  return (
    <nav className="hidden lg:block text-sm text-white font-montserrat">
      <div className="flex items-center space-x-7">
        {/* <ModeToggle /> */}

        <div className="flex items-center justify-between space-x-2">
          {/* {user.id &&
            <UserDropdown />
          } */}

          {session?.user?.id
            ?
            <p className="text-black">Hello {session?.user?.givenName}</p>
            :
            <Button onClick={() => openModal()}>
              Login
            </Button>
          }

          <button className="text-black" onClick={() => openModal()}>
            Login Again
          </button>

        </div>

      </div>
    </nav>
  )
}

export default MenuDesktop
