
"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const menus = [
  {
    title: "Home",
    href: "/",
    subtitle: "Crafting Digital Experiences",
  },
  {
    title: "About",
    href: "/about",
    subtitle: "Who We Are",
  },
  {
    title: "Expertise",
    href: "/expertise",
    subtitle: "Our Services",
  },
  {
    title: "Projects",
    href: "/projects",
    subtitle: "Selected Works",
  },
  {
    title: "Get Start",
    href: "/get-start",
    subtitle: "Let's Talk",
  },
];

export default function MenuOverlay({
  isOpen,
  onClose,
}: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-50 bg-black text-white"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-8 py-8 lg:px-16">
            <Link href="/" onClick={onClose} className="text-2xl font-semibold tracking-wider">
              <Image 
                src="/img/elements/white-logo.webp"
                alt="Logo"
                width={195}
                height={32}
                className="w-auto h-auto"
                priority
              />
            </Link>
            <button onClick={onClose}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-black">
              ✕
            </button>
          </div>
          <div className="mx-auto flex h-[calc(100vh-96px)] max-w-[1600px] flex-col lg:flex-row">
            <div className="flex w-full flex-col justify-center border-b border-white/10 px-8 py-10 lg:w-1/2 lg:border-b-0 lg:border-r lg:border-white/10 lg:px-16">
              {menus.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.45,
                  }}
                >
                  <Link href={item.href} onClick={onClose} className="group mb-8 flex items-center justify-between">
                    <span className="text-5xl font-light transition duration-300 group-hover:translate-x-3 group-hover:text-gray-400 lg:text-7xl">
                      {item.title}
                    </span>
                    <span className="text-sm uppercase tracking-[4px] text-gray-500 opacity-0 transition duration-300 group-hover:opacity-100">
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex w-full items-center justify-center px-8 lg:w-1/2 lg:px-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                }}
                className="max-w-lg"
              >
                <p className="mb-4 text-sm uppercase tracking-[6px] text-gray-500">
                  Welcome
                </p>
                <h2 className="mb-6 text-5xl font-light leading-tight lg:text-7xl">
                  Lets Build
                  <br />
                  Something
                  <br />
                  Amazing.
                </h2>
                <p className="text-lg leading-8 text-gray-400">
                  We design and develop modern digital products that
                  combine creativity, technology, and strategy to
                  deliver exceptional user experiences.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}