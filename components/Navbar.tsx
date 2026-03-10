// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex space-x-6 text-sm font-medium">
      <Link href="/" className="text-zinc-500 hover:text-blue-600 transition-colors">
        Archive
      </Link>
      <Link href="/about" className="text-zinc-500 hover:text-blue-600 transition-colors">
        About
      </Link>
    </nav>
  );
}