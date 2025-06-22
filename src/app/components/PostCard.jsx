import Link from 'next/link'

export default function PostCard({ post,type }) {

  return (
    <Link 
      href={`/${type}/${post.slug}`}
      className="block p-3 sm:p-4 rounded-lg transition-colors  hover:opacity-55 "
    >
      <article>
        <h2 className="text-xl font-semibold text-[var(--foreground)] ">
          {post.title}
        </h2>
        <time className="text-sm text-[var(--muted)]">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <p className="mt-2 text-[var(--muted)]">
          {post.excerpt}
        </p>
      </article>
    </Link>
  )
}