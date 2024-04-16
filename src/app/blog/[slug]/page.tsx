'use client'

import { Markup } from 'react-render-markup'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import DOMPurify from 'dompurify'
import { useQuery } from '@tanstack/react-query'

import { getArticleBySlug } from '@/services/apis/requests/blog'
import Avatar from '@/components/atoms/Avatar'

import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestIcon,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  XIcon
} from 'react-share'
import { LinkedinIcon } from 'lucide-react'

function FloatingShareButtons ({ className, shareUrl, data }: any) {
  return (
    <div className={`${className} flex`}>
      <FacebookShareButton
        url={shareUrl}
        hashtag={''}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="none"
          viewBox="0 0 28 28"
        >
          <path
            fill="#222"
            fillRule="evenodd"
            d="M7 12.609V8.96c0-.368.306-.709.674-.709h2.205v-1.82c0-4.235 2.17-6.396 6.492-6.431 1.444 0 2.818.184 4.104.56.402.122.551.367.525.77l-.49 3.553c-.035.157-.123.306-.28.463-.184.096-.367.158-.551.123-.77-.219-1.558-.307-2.45-.307-1.225 0-1.409.245-1.409 1.514v1.575h3.955c.367 0 .709.368.709.77l-.307 3.649c0 .367-.306.621-.673.621H15.82v14c0 .368-.306.709-.674.709h-4.559c-.367 0-.7-.341-.7-.709v-14H7.682A.683.683 0 017 12.61z"
            clipRule="evenodd"
          ></path>
        </svg>
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            fill="#222"
            d="M9.317 6.775L15.146 0h-1.381L8.704 5.883 4.662 0H0l6.112 8.895L0 16h1.381l5.344-6.212L10.994 16h4.662L9.317 6.775zM7.426 8.974l-.62-.886L1.88 1.04H4l3.977 5.688.62.886 5.168 7.394h-2.121L7.426 8.974z"
          ></path>
        </svg>
      </TwitterShareButton>

      <LinkedinShareButton url={shareUrl}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="none"
          viewBox="0 0 28 28"
        >
          <path
            fill="#222"
            fillRule="evenodd"
            d="M0 2.34A2.339 2.339 0 012.34 0h23.32A2.339 2.339 0 0128 2.34v23.32A2.339 2.339 0 0125.66 28H2.34A2.339 2.339 0 010 25.66V2.34zm11.083 8.335h3.792v1.905c.547-1.095 1.947-2.08 4.051-2.08 4.033 0 4.99 2.18 4.99 6.182v7.41h-4.083v-6.5c0-2.278-.546-3.563-1.936-3.563-1.928 0-2.73 1.386-2.73 3.564v6.499h-4.084V10.675zm-7 13.242h4.084V10.5H4.083v13.417zM8.75 6.125a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </LinkedinShareButton>

      <PinterestShareButton url={shareUrl} media={`${String(window.location)}/${data?.imageUrl}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 999.9 999.9"
        >
          <path d="M0 500c2.6-141.9 52.7-260.4 150.4-355.4S364.6 1.3 500 0c145.8 2.6 265.3 52.4 358.4 149.4 93.1 97 140.3 213.9 141.6 350.6-2.6 140.6-52.7 258.8-150.4 354.5-97.7 95.6-214.2 144.1-349.6 145.4-46.9 0-93.7-7.2-140.6-21.5 9.1-14.3 18.2-30.6 27.3-48.8 10.4-22.1 23.4-63.8 39.1-125 3.9-16.9 9.8-39.7 17.6-68.4 9.1 15.6 24.7 29.9 46.9 43 58.6 27.3 120.4 24.7 185.5-7.8 67.7-39.1 114.6-99.6 140.6-181.6 23.4-85.9 20.5-165.7-8.8-239.2C778.3 277 725.9 224 650.4 191.4c-95-27.3-187.5-24.4-277.3 8.8s-152.3 90.2-187.5 170.9C176.5 401 171 430.7 169 460c-2 29.3-1 57.9 2.9 85.9s13.7 53.1 29.3 75.2 36.5 39.1 62.5 50.8c6.5 2.6 11.7 2.6 15.6 0 5.2-2.6 10.4-13 15.6-31.2 5.2-18.2 7.2-30.6 5.9-37.1-1.3-2.6-3.9-7.2-7.8-13.7-27.3-44.3-36.5-90.8-27.3-139.6 9.1-48.8 29.3-90.2 60.5-124 48.2-43 104.5-66.4 168.9-70.3 64.4-3.9 119.5 13.7 165 52.7 24.7 28.6 40.7 63.1 47.8 103.5s7.2 79.1 0 116.2c-7.2 37.1-19.9 71.9-38.1 104.5-32.6 50.8-71 76.8-115.2 78.1-26-1.3-47.2-11.4-63.5-30.3s-21.2-40.7-14.6-65.4c2.6-14.3 10.4-42.3 23.4-84 13-41.7 20.2-72.9 21.5-93.7-3.9-49.5-26.7-74.9-68.4-76.2-32.6 3.9-56.6 18.6-72.3 43.9s-24.1 54.4-25.4 86.9c3.9 37.8 9.8 63.8 17.6 78.1-14.3 58.6-25.4 105.5-33.2 140.6-2.6 9.1-9.8 37.1-21.5 84s-18.2 82.7-19.5 107.4V957C206.3 914 133.3 851.9 80 770.5 26.7 689.1 0 598.9 0 500z"></path>
        </svg>
      </PinterestShareButton>

      <button type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="none"
          viewBox="0 0 512 512"
        >
          <path
            fill="#222"
            d="M459.654 233.373l-90.531 90.5c-49.969 50-131.031 50-181 0-7.875-7.844-14.031-16.688-19.438-25.813l42.063-42.063c2-2.016 4.469-3.172 6.828-4.531 2.906 9.938 7.984 19.344 15.797 27.156 24.953 24.969 65.563 24.938 90.5 0l90.5-90.5c24.969-24.969 24.969-65.563 0-90.516-24.938-24.953-65.531-24.953-90.5 0l-32.188 32.219c-26.109-10.172-54.25-12.906-81.641-8.891l68.578-68.578c50-49.984 131.031-49.984 181.031 0 49.97 49.986 49.97 131.033.001 181.017zM220.326 382.186l-32.203 32.219c-24.953 24.938-65.563 24.938-90.516 0-24.953-24.969-24.953-65.563 0-90.531l90.516-90.5c24.969-24.969 65.547-24.969 90.5 0 7.797 7.797 12.875 17.203 15.813 27.125 2.375-1.375 4.813-2.5 6.813-4.5l42.063-42.047c-5.375-9.156-11.563-17.969-19.438-25.828-49.969-49.984-131.031-49.984-181.016 0l-90.5 90.5c-49.984 50-49.984 131.031 0 181.031 49.984 49.969 131.031 49.969 181.016 0l68.594-68.594c-27.407 4.031-55.548 1.281-81.642-8.875z"
          ></path>
        </svg>
      </button>
    </div>
  )
}

function BlogView () {
  const { slug } = useParams()

  const dataQuery = useQuery({
    queryKey: [`blog/${slug}`, slug],
    queryFn: async () => await getArticleBySlug(String(slug))
  })

  if (dataQuery.isLoading) return <div>Loading</div>
  const data = dataQuery?.data?.NewsArticle
  // console.log(dataQuery?.data?.NewsArticle)
  const shareUrl = 'https://www.google.com'
  return (
    <article className="">

      <div className="max-w-screen-sm mx-auto">
        <h1 className="text-primary text-sm md:text-lg lg:text-5xl font-medium">{dataQuery?.data?.NewsArticle?.title}</h1>
        <div>

          <Avatar src={data?.Author.imageUrl} name={data?.Author.givenName} />
          <div>
            {data?.wordCount} min read
            {data?.createdAt}
          </div>

          <FloatingShareButtons className="flex-row space-x-4" />
        </div>
      </div>

      <div className="max-w-screen-sm mx-auto">
        <Image
          src={`${dataQuery?.data?.NewsArticle?.imageUrl}`}
          alt={`${dataQuery?.data?.NewsArticle?.imageCaption}`}
          width={`${dataQuery?.data?.NewsArticle?.imageWidth}`}
          height={`${dataQuery?.data?.NewsArticle?.imageHeight}`}
          priority='true'
          style={{
            objectFit: 'contain'
          }}
        />
      </div>

      <div className="prose lg:prose-lg mx-auto relative">
        <Markup markup={DOMPurify.sanitize(dataQuery?.data?.NewsArticle?.body)} />

        <div className="absolute h-full top-0">
          <FloatingShareButtons className="flex-col space-y-4" />
        </div>
      </div>
      {/* <div className="prose mx-autoprose mx-auto" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data?.body, { sanitize: true }) }} />` */}
    </article>
  )
}

export default BlogView
