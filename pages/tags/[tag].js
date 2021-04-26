import Head from 'next/head'
import Link from 'next/link'
import { getAllBlogsData, getAllTagPaths } from '../../lib/blogs'
import { kebabCase } from '../../lib/helpers'
import BlogFeedList from '../../components/BlogFeedList'

export default function TagPage({ tag, blogs }) {
  return (
    <div>
      <Head>
        <title>Blogs about {tag}</title>
      </Head>
      <h1 className="tag__title title--l">Blogs about {tag}</h1>
      <Link href="/">
        <a className="tag__back-link text href">&larr; Go to homepage</a>
      </Link>
      <BlogFeedList blogs={blogs} />
    </div>
  )
}

export async function getStaticPaths() {
  const res = { paths: await getAllTagPaths(), fallback: false }
  return { paths: await getAllTagPaths(), fallback: false }
}

export async function getStaticProps({ params: { tag } }) {
  const data = (await getAllBlogsData()).filter((blog) =>
    blog.tags.find(
      (blogTag) => kebabCase(blogTag).replace('/tags/', '') === tag
    )
  )

  const properTag = data[0].tags.find(
    (bTag) => kebabCase(bTag).replace('/tags/', '') === tag
  )

  return {
    props: { tag: properTag, blogs: data },
  }
}
