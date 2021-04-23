import Head from 'next/head'
import { getAllBlogsData } from '../lib/blogs'
import BlogFeedList from '../components/BlogFeedList'
import Hero from '../components/Hero'

export default function Home({ blogs }) {
  return (
    <div className="container">
      <Head>
        <title>Blogst</title>
      </Head>
      <Hero />
      <BlogFeedList blogs={blogs} />
    </div>
  )
}

export async function getStaticProps() {
  const blogs = await getAllBlogsData()
  return {
    props: { blogs },
  }
}
