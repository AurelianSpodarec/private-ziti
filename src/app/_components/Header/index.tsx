import Container from '@/components/Container'

import MenuDesktop from './MenuDesktop'
import { auth } from '@/auth'

async function Header () {
  const session = await auth()
  // TODO: START; Remove once blog becomes part of theapp
  // const router = usePathname()
  // const isBlogPage = router.includes('/articles') // TODO: Use const for urls
  // TODO: END

  // const [mobileOpen, setMobileOpen] = useState(false)

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 1220) setMobileOpen(false)
  //   }

  //   window.addEventListener('resize', handleResize)
  //   return () => { window.removeEventListener('resize', handleResize) }
  // }, [])

  console.log("woopopo", session?.user)
  return (
    <header className="w-full z-30">
      <Container>
        <div className="flex justify-between items-center py-2">

          <MenuDesktop session={session} />

          {/* TODO: Temporary - remove once the blog becomes part of the app */}
          {/* {!isBlogPage && (
            <>
              <div className="lg:hidden">
                <button type="button" onClick={() => { setMobileOpen(true) }}>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><g id="Menu / Hamburger_LG"><path id="Vector" d="M3 17H21M3 12H21M3 7H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                </button>
              </div>

              <MenuMobile isOpen={mobileOpen} setMobileOpen={setMobileOpen} />
            </>
          )} */}
        </div>
      </Container>
    </header>
  )
}

export default Header
