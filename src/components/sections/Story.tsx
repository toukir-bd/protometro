"use client";

import { useEffect, useRef } from "react";

const text = `

We believe every brand has the potential to rise above the ordinary. It's more than building a website, app, or software. It's about creating trust, meaningful connections, and digital experiences that leave a lasting impression.

Through thoughtful design and modern development, we help businesses become memorable, build credibility, and grow with confidence.

Every successful partnership begins with trust. We earn it through creativity, transparency, and results. Let's build trust—and together, build a brand that rises above the rest.
`;

export default function Story() {
  const words = text.trim().split(/\s+/);

  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.45;

      wordRefs.current.forEach((word) => {
        if (!word) return;

        const rect = word.getBoundingClientRect();

        if (rect.top < triggerPoint) {
          word.classList.add("!text-white");
        } else {
          word.classList.remove("!text-white");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="max-w-[800px] w-full mx-auto px-4 py-[clamp(80px,10vw,120px)]">
      <h2>The story of BeRiser begins with ambition.</h2>
      <h3 className="max-w-[800px] text-[clamp(42px,5.1vw,52px)] font-medium leading-[1.55] tracking-tight text-[#292929] break-words">
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            ref={(element) => {
              wordRefs.current[index] = element;
            }}
            className="mr-[0.22em] transition-colors duration-500">
            {word}
          </span>
        ))}
      </h3>
    </section>
  );
}