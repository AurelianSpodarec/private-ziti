import Link from "next/link"

import { IArticle } from "@/interfaces/IBlog"
import Avatar from "../atoms/Avatar"

function CardArticle({ data }: { data: IArticle }) {
  return (
    <article>
      <Link href={`blog/${data.slug}`}>

        <img src={`https://ziti.io${data.imageUrl}`} />
        <header>
          <h3>{data.title}</h3>
          <div>
            <Avatar src="https://github.com/shadcn.png" fallbackText="JD" name="John Doe" />
            <span>{data.Author.name}</span>
            <span>{data.wordCount} min read - {data.datePublished}</span>
          </div>
        </header>
      </Link>
    </article>
  )
} 

export default CardArticle
