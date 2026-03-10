// pages/posts/[id].tsx
import { useRouter } from 'next/router';
import { posts } from '../../posts';
import Link from 'next/link';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  
  // Find the specific post based on the ID in the URL
  const post = posts.find((p) => p.id === id);

  if (!post) return <div className="text-center py-20">Post not found.</div>;

  return (
    <article className="max-w-2xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline text-sm mb-8 block">
        ← Back to Archive
      </Link>
      <h1 className="text-4xl font-bold mb-2 tracking-tight">{post.title}</h1>
      <p className="text-zinc-400 mb-8">{post.date}</p>
      <div className="prose dark:prose-invert leading-relaxed text-zinc-700 dark:text-zinc-300">
        {post.content}
      </div>
    </article>
  );
}