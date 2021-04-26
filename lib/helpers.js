export function kebabCase(tag) {
  return `/tags/${tag.trim().toLowerCase().replace(/ /g, '-')}`
}
