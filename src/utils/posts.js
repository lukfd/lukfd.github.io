import fm from 'front-matter'
import MarkdownIt from 'markdown-it'

// Use highlight.js core + popular languages to keep bundle lean and fast
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import bash from 'highlight.js/lib/languages/bash'
import json from 'highlight.js/lib/languages/json'
import yaml from 'highlight.js/lib/languages/yaml'
import xml from 'highlight.js/lib/languages/xml' // for HTML and Vue templates
import css from 'highlight.js/lib/languages/css'
import sql from 'highlight.js/lib/languages/sql'
import 'highlight.js/styles/github-dark.css'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('js', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('ts', typescript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('py', python)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('sh', bash)
hljs.registerLanguage('json', json)
hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('yml', yaml)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('vue', xml)
hljs.registerLanguage('css', css)
hljs.registerLanguage('sql', sql)

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
      } catch (__) {}
    }
    // Fallback: auto detect or default escape
    try {
      return hljs.highlightAuto(str).value
    } catch (__) {
      return ''
    }
  }
})

// Read all markdown files in src/posts/
const rawPosts = import.meta.glob('@/posts/*.md', { query: '?raw', import: 'default', eager: true })

export function getAllPosts() {
  const posts = Object.entries(rawPosts).map(([path, content]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '')
    const parsed = fm(content)
    const data = parsed.attributes || {}
    const body = parsed.body || ''

    // Estimate reading time (~200 words per minute)
    const wordCount = body.split(/\s+/).filter(Boolean).length
    const readingTime = Math.max(1, Math.ceil(wordCount / 200))

    return {
      slug,
      title: data.title || slug,
      date: data.date ? new Date(data.date).toISOString().split('T')[0] : '',
      description: data.description || data.summary || '',
      tags: data.tags || [],
      author: data.author || 'Luca Comba',
      draft: Boolean(data.draft),
      readingTime: `${readingTime} min read`,
      content: body,
      rawContent: content
    }
  })
  .filter((post) => !post.draft)

  // Sort newest first
  return posts.sort((a, b) => (b.date > a.date ? 1 : -1))
}

export function getPostBySlug(slug) {
  const posts = getAllPosts()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return null

  // Auto-resolve image paths migrated from Hugo to Vite's public/photos/blog/ folder
  const normalizedContent = post.content
    .replace(/(src=["'])\/tc-houses\//g, '$1/photos/blog/tc-houses/')
    .replace(/(src=["'])\/machine_learning_notes\.jpg/g, '$1/photos/blog/machine_learning_notes.jpg')
    .replace(/(\]\()\/tc-houses\//g, '$1/photos/blog/tc-houses/')
    .replace(/(\]\()\/machine_learning_notes\.jpg/g, '$1/photos/blog/machine_learning_notes.jpg')

  return {
    ...post,
    html: md.render(normalizedContent)
  }
}

import aboutRaw from '@/content/about.md?raw'

export function getAboutContent() {
  const parsed = fm(aboutRaw)
  let content = parsed.body || ''

  content = content
    .replace(/(src=["'])\/me1\.jpg/g, '$1/photos/blog/me1.jpg')
    .replace(/(src=["'])\/mn1\.jpg/g, '$1/photos/blog/mn1.jpg')
    .replace(/(src=["'])\/mn2\.jpg/g, '$1/photos/blog/mn2.jpg')
    .replace(/(src=["'])\/rivoli\.jpg/gi, '$1/photos/blog/rivoli.JPG')
    .replace(/(\]\()\/me1\.jpg/g, '$1/photos/blog/me1.jpg')
    .replace(/(\]\()\/mn1\.jpg/g, '$1/photos/blog/mn1.jpg')
    .replace(/(\]\()\/mn2\.jpg/g, '$1/photos/blog/mn2.jpg')
    .replace(/(\]\()\/rivoli\.jpg/gi, '$1/photos/blog/rivoli.JPG')

  return {
    ...parsed.attributes,
    html: md.render(content)
  }
}
