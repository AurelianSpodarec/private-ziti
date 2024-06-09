import React, { useState } from "react"

// import IconHamburger from "@/assets/icons/IconHamburger"
import UserDropdownMenu from './../_components/UserDropdownMenu'
import MobileNavigation from "./Navigation"
import { Button } from "@/components/ui/button"
// import { Button } from "@/components/atoms/Button";

function NavigationMobile ({ className }: { className: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className={`flex justify-between items-center py-1 ${className} bg-[#181818]`}>
        <div className="flex items-center gap-2">
          <Button onClick={() => setIsMobileMenuOpen(true)} variant="ghost">
            {/* <IconHamburger /> */}
          </Button>
          <span className="text-gray-100 text-lg font-semibold">Autosite</span>
        </div>
        <UserDropdownMenu />
      </header>
      <MobileNavigation isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}

export default NavigationMobile
