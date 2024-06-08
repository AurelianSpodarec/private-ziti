import { Button } from '@/components/ui/button'
import UserDropdown from '../UserDropdown'
import { auth } from '@/auth'
import { serverActionUser } from './serverActionUser'
import { useEffect, useState } from 'react'
import useModal from '@/context/modal/useModal'
import { getUserprofile } from '@/services/apis/requests/user'

function MenuDesktop () {
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const user = await serverActionUser()
      setUser(user)
      // const a = await getUserprofile()
      // console.log("a", a)
    }

    fetchData()
  }, [])

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

          {user?.id
            ?
            <p className="text-black">Hello User</p>
            :
            <Button onClick={() => openModal()}>
              Login
            </Button>
          }

        </div>

      </div>
    </nav>
  )
}

export default MenuDesktop
