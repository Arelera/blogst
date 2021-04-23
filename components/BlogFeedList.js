import BlogFeedItem from './BlogFeedItem'

export default function BlogFeedList({ blogs }) {
  return (
    <section className="blog-feed">
      <h2 className="blog-feed__title title--m">Blogs</h2>
      <ul className="blog-feed__list">
        {blogs.map((blog, i) => (
          <BlogFeedItem blog={blog} key={i} />
        ))}
      </ul>
    </section>
  )
}
