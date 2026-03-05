export function toSlug(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

export function fromSlug(slug: string): string {
  // best-effort: replace dashes with spaces and capitalize words
  const s = slug.replace(/-/g, ' ')
  return s.replace(/\b\w/g, c => c.toUpperCase())
}