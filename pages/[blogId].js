import Head from 'next/head'
import Link from 'next/link'
import Markdowned from '../components/Markdowned'
import { getAllBlogPaths, getBlogDataById } from '../lib/blogs'
import { kebabCase } from '../lib/helpers'

export default function BlogPage({
  data: { title, date, excerpt, tags, content },
}) {
  return (
    <article className="blog">
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
      </Head>
      <header className="blog__header">
        <h1 className="blog__title title--l">{title}</h1>
        <ul className="blog__tags">
          {tags.map((tag, i) => (
            <Link href={kebabCase(tag)} key={i}>
              <a>
                <li className="blog__tag text" key={i}>
                  {tag}
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </header>

      <div className="blog__body">
        <small className="blog__date small-text">
          <time dateTime={date}>{date}</time>
        </small>
        <Markdowned>{content}</Markdowned>
        <Link href="/">
          <a className="blog__back-link text href">&larr; Go to homepage</a>
        </Link>
      </div>
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
