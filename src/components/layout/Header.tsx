
"use client";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  onMenuOpen: () => void;
}

export default function Header({ onMenuOpen }: HeaderProps) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-full items-center justify-between px-8 py-6 lg:px-16">
        <Link href="/" className="text-2xl font-semibold tracking-wider">
          <Image 
            src="/img/elements/white-logo.webp"
            alt="Logo"
            width={238}
            height={38}
            className="w-[238] h-[38px]"
            priority
          />
        </Link>
        <button onClick={onMenuOpen} className="group cursor-pointer flex h-16 w-16 items-center justify-center border border-white/20 hover:bg-black/30 hover:text-black rounded-full">
          <span className="flex flex-col space-y-[3px]">
            <span className="w-[22px] h-[2px] bg-white transition-all ease-in-out group-hover:w-[28px]"></span>
            <span className="w-[18px] h-[2px] bg-white transition-all ease-in-out  group-hover:w-[28px]"></span>
            <span className="w-[28px] h-[2px] bg-white transition-all ease-in-out  group-hover:w-[28px]"></span>
            <span className="w-[24px] h-[2px] bg-white transition-all ease-in-out  group-hover:w-[28px]"></span>
          </span>
        </button>
      </div>
    </header>
  );
}