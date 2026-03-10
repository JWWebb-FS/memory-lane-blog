// components/Layout.tsx
import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans">
      {/* Space for the Navbar  */}
      <header className="w-full border-b border-zinc-200 dark:border-zinc-800 p-4">
       <div className="max-w-4xl mx-auto flex justify-between items-center">
  <Link href="/">
    <h1 className="text-xl font-bold tracking-tighter cursor-pointer">Memory Lane</h1>
  </Link>
  <Navbar /> {/* This replaces the loading text */}
</div>
      </header>

      {/* Main Content Area: Requirement #1 - Create your own layout */}
      <main className="flex-grow max-w-4xl w-full mx-auto px-6 py-12">
        {children}
      </main>

      <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 p-8 text-center text-zinc-400 text-xs">
        <p>© 2026 Jacob Webb - Full Sail University Web Development</p>
      </footer>
    </div>
  );
}