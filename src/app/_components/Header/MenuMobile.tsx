import Link from "next/link";

interface IMenuMobile {
  isOpen: boolean;
  setMobileOpen: (isOpen: boolean) => void;
}

function MenuMobile({ isOpen, setMobileOpen }: IMenuMobile) {
  return (
    <div id="menu-mobile" className={`fixed top-0 bottom-0 right-0 w-[80%] z-10 bg-[#1a1a1a] transition duration-150 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

      <div className="flex justify-between px-4 pt-2">
        <div></div>
        <button type="button" onClick={() => setMobileOpen(false)}>
          <svg className="w-12 h-12 fill-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
          </svg>
        </button>
      </div>

      <nav className="md:ml-auto flex flex-col text-sm space-y-4 justify-center p-8">
        <Link onClick={() => setMobileOpen(false)} href="/" className={"text-white font-extrabold text-2xl"}>Home</Link>
      </nav>

    </div>
  )
}

export default MenuMobile;
