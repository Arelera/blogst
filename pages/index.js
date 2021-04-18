import Head from 'next/head'
import { getAllBlogsData } from '../lib/blogs'
import BlogFeedList from '../components/BlogFeedList'

export default function Home({ blogs }) {
  console.log('blogs: ', blogs)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Yo wadap</h1>
      </div>
      <BlogFeedList blogs={blogs} />
    </div>
  )
}

export async function getStaticProps() {
  const blogs = await getAllBlogsData()
  console.log('DATA: ', blogs)
  return {
    props: { blogs },
  }
}
