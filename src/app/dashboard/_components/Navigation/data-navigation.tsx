
export interface INavigationItem {
  id: string
  name: string
  url: string
  icon: JSX.Element
}

const dataNavigation: INavigationItem[] = [
  {
    id: "listings",
    name: "Listings",
    url: "listings",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M464 256a208 208 0 10-416 0 208 208 0 10416 0zM0 256a256 256 0 11512 0 256 256 0 11-512 0zm306.7 69.1l-144.3 55.5c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31l-55.5 144.3c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 10-64 0 32 32 0 1064 0z"></path>
    </svg>
  },
  {
    id: "messages",
    name: "Messages",
    url: "messages",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h96zm48 124l-.2.2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H309.3L208 492z"></path>
    </svg>
  }
]

export { dataNavigation }
