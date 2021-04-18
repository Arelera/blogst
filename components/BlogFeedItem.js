import Link from 'next/link'

export default function BlogFeedItem({ blog: { blogId, title } }) {
  return (
    <li>
      <Link href={blogId}>
        <a>
          <h3>{title}</h3>
        </a>
      </Link>
    </li>
  )
}
