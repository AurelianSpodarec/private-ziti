import Link from "next/link"

interface Props {
  item: any
  isActive: boolean
}

function NavItem ({ item, isActive }: Props) {
  return (
    <Link
      href={`/dashboard/${item.url}`}
      className={`
          cursor-default flex items-center p-3 text-base rounded-lg group 
          ${isActive ? "bg-gray-700 text-gray-200 fill-gray-200" : "text-gray-900  dark:hover:bg-gray-700 dark:text-gray-200"}
        `
      }>
      <div className={`
        h-6 w-6 max-w-[30px] transition duration-75 dark:text-gray-400 dark:group-hover:text-white
        ${isActive ? "" : "group-hover:text-gray-900 "}
      `}>
        {item.icon}
      </div>
      <span className="sr-only">{item.name}</span>
      <span>{item.name}</span>
    </Link>
  )
}

export default NavItem
