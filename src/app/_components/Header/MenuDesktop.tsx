import ModeToggle from "@/components/atoms/ModeToggle";
import Link from "next/link";

function MenuDesktop() {
  return (
    <nav className="hidden lg:block space-x-7 text-sm text-white font-montserrat">
      <ModeToggle />
    </nav>
  )
}

export default MenuDesktop;
