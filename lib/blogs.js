import fs from 'fs'
import path from 'path'
import remark from 'remark'
import matter from 'gray-matter'
import { kebabCase } from './helpers'

const blogsPath = path.join(process.cwd(), '/data/blogs')

export function getAllBlogPaths() {
  return fs.readdirSync(blogsPath).map((fileName) => ({
    params: { blogId: fileName.replace('.md', '') },
  }))
}

export async function getAllBlogsData() {
  const allBlogIds = fs.readdirSync(blogsPath)

  const allBlogsData = []
  for (let blogId of allBlogIds) {
    const file = fs.readFileSync(path.join(blogsPath, blogId), 'utf8')

    const matterRes = matter(file)
    const processed = await remark().process(matterRes.content)

    allBlogsData.push({
      blogId: blogId.replace('.md', ''),
      ...matterRes.data,
      content: processed.contents,
    })
  }
  return allBlogsData
}

export async function getBlogDataById(blogId) {
  const blogPath = path.join(blogsPath, `${blogId}.md`)

  const file = fs.readFileSync(blogPath)

  const matterRes = matter(file)
  const processed = await remark().process(matterRes.content)

  return {
    blogId,
    ...matterRes.data,
    content: processed.contents,
  }
}

// gets all possible tags by looking at every blogs tags
export async function getAllTagPaths() {
  const tags = []

  const blogs = await getAllBlogsData()

  for (let blog of blogs) {
    for (let t of blog.tags) {
      const tag = kebabCase(t).replace('/tags/', '')
      if (!tags.find((k) => k === tag)) {
        tags.push(tag)
      }
    }
  }

  return tags.map((tag) => ({ params: { tag } }))
}
