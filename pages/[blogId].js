import Markdown from 'markdown-to-jsx'
import Link from 'next/link'
import { getAllBlogPaths, getBlogDataById } from '../lib/blogs'

export default function BlogPage({ data: { title, date, tags, content } }) {
  return (
    <article>
      <header>
        <h1>{title}</h1>
        <small>
          <time dateTime={date}>{date}</time>
        </small>
      </header>
      <Markdown>{content}</Markdown>
      <Link href="/">
        <a>&larr; Go back</a>
      </Link>
    </article>
  )
}

export async function getStaticPaths() {
  return {
    paths: getAllBlogPaths(),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = await getBlogDataById(params.blogId)
  return {
    props: { data },
  }
}
