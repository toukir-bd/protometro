
"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  onMenuOpen: () => void;
}

export default function Header({ onMenuOpen }: HeaderProps) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-full items-center justify-between px-8 py-8 lg:px-16">
        <Link href="/" className="text-2xl font-semibold tracking-wider">
          <Image 
            src="/img/elements/white-logo.webp"
            alt="Logo"
            width={195}
            height={32}
            className="w-auto h-auto"
            priority
          />
        </Link>
        <button onClick={onMenuOpen} className="group flex h-14 w-14 items-center justify-center border border-white/20 transition hover:bg-white hover:text-black">
          <Menu size={28} strokeWidth={1.5} className="transition group-hover:scale-110"/>
        </button>
      </div>
    </header>
  );
}