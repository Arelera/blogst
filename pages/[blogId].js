import { getAllBlogPaths, getBlogDataById } from '../lib/blogs'

export default function BlogPage({ data: { title } }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
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
