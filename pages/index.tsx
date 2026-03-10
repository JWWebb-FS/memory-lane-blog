// pages/index.tsx
import Link from 'next/link';
import { posts } from '../posts';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center sm:text-left">
        <h2 className="text-4xl font-extrabold tracking-tight mb-4">The Archive</h2>
        <p className="text-zinc-500">A collection of my recent thoughts and study notes.</p>
      </section>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group border-b border-zinc-100 dark:border-zinc-800 pb-8">
            <Link href={`/posts/${post.id}`}>
              <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors cursor-pointer">
                {post.title}
              </h3>
            </Link>
            <p className="text-sm text-zinc-400 mt-1 mb-4">{post.date}</p>
            <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2">{post.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}