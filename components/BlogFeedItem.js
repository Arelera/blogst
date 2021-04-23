import Link from 'next/link'

export default function BlogFeedItem({
  blog: { blogId, title, excerpt, tags, date },
}) {
  return (
    <li className="blog-feed-item">
      <Link href={`/${blogId}`}>
        <a>
          <h3 className="blog-feed-item__title title--s">{title}</h3>
          <p className="blog-feed-item__excerpt text">{excerpt}</p>
        </a>
      </Link>
      <div className="blog-feed-item__bottom small-text">
        <ul className="blog-feed-item__tags">
          {tags.map((tag, i) => (
            <>
              {i !== 0 && <span>-</span>}
              <li key={i}>
                <Link href={tagToHref(tag)}>
                  <a className="blog-feed-item__tag">{tag}</a>
                </Link>
              </li>
            </>
          ))}
        </ul>
        <small>
          <time dateTime={date}>{date}</time>
        </small>
      </div>
    </li>
  )
}

function tagToHref(tag) {
  return `/tag/${tag.trim().toLowerCase().replace(/ /g, '-')}`
}
