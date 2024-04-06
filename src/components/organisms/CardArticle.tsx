import { IArticle } from "@/interfaces/IBlog"
import Avatar from "../atoms/Avatar"
import Link from "next/link"

function CardArticle({ data }: { data: IArticle }) {
  return (
    <article>
      <Link href={`blog/${data.slug}`}>

        <img src={data.imageUrl} />
        <header>
          <h3>{data.title}</h3>
          <div>
            <Avatar />
            <span>{data.Author.name}</span>
            <span>{data.wordCount} min read - {data.datePublished}</span>
          </div>
        </header>
      </Link>
    </article>
  )
}

export default CardArticle
