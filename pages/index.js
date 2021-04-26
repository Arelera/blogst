import Head from 'next/head'
import { getAllBlogsData } from '../lib/blogs'
import BlogFeedList from '../components/BlogFeedList'
import Hero from '../components/Hero'

export default function Home({ blogs }) {
  return (
    <div>
      <Head>
        <title>Blogst</title>
        <meta
          name="description"
          content="A simple blog site made with Next.js"
        />
      </Head>
      <Hero />
      <BlogFeedList title="Blogs" blogs={blogs} />
    </div>
  )
}

export async function getStaticProps() {
  const blogs = await getAllBlogsData()
  return {
    props: { blogs },
  }
}
