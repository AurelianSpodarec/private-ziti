import Link from "next/link"

import { IArticle } from "@/interfaces/IBlog"
import Avatar from "../atoms/Avatar"

function CardArticle({ data }: { data: IArticle }) {
  return (
    <article>
      <Link href={`blog/${data.slug}`}>

        {/* <img src={`https://ziti.io${data.imageUrl}`} /> */}
        <img className="rounded-lg" src="https://news.airbnb.com/wp-content/uploads/sites/4/2024/04/02-Airbnb-Gassho-Village-Credit-Satoshi-Nagare.jpg?w=2048" />
        <header>
          <h3 className="text-xs md:text-md lg:text-2xl">{data.title}</h3>
          <div className="flex items-center">
            <Avatar src="https://github.com/shadcn.png" fallbackText="JD" name="John Doe" />
            <div className="flex flex-col">
              <span>{data.Author.name}</span>
              <span>{data.wordCount} min read - {data.datePublished}</span>
            </div>
          </div>
        </header>
      </Link>
    </article>
  )
}

export default CardArticle
