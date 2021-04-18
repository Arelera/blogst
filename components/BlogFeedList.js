import BlogfeedItem from './BlogFeedItem'

export default function BlogFeedList({ blogs }) {
  return (
    <ul>
      {blogs.map((blog) => (
        <BlogfeedItem blog={blog} />
      ))}
    </ul>
  )
}
