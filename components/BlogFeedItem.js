import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { kebabCase } from '../lib/helpers'

export default function BlogFeedItem({
  blog: { blogId, title, excerpt, tags, date },
}) {
  const router = useRouter()
  const tagClickHandler = (e, tag) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(kebabCase(tag))
  }

  return (
    <li className="blog-feed-item">
      <Link href={`/${blogId}`}>
        <a>
          <h3 className="blog-feed-item__title title--s">{title}</h3>
          <p className="blog-feed-item__excerpt text">{excerpt}</p>
          <div className="blog-feed-item__bottom small-text">
            <ul className="blog-feed-item__tags">
              {tags.map((tag, i) => (
                <React.Fragment key={i}>
                  {i !== 0 && <span>-</span>}
                  <li
                    tabIndex="0"
                    className="blog-feed-item__tag"
                    onClick={(e) => tagClickHandler(e, tag)}
                  >
                    {tag}
                  </li>
                </React.Fragment>
              ))}
            </ul>
            <small className="blog-feed-item__date">
              <time dateTime={date}>{date}</time>
            </small>
          </div>
        </a>
      </Link>
    </li>
  )
}
