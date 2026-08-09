"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = [
  "the story of CRED begins",
  "with trust. we believe",
  "individuals who've proven",
  "their trustworthiness",
  "deserve better: better",
  "experiences, better rewards,",
  "better rules. this is the status",
  "quo we're building. make it",
  "to the club, and experience",
];

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  return (
    <section ref={sectionRef} className="relative min-h-[300vh]">
      <div className="sticky top-0 flex min-h-screen items-center px-[8vw] py-20">
        <p className="max-w-[1200px] text-[clamp(42px,5.2vw,82px)] leading-[1.15] tracking-[-0.035em]">
          {lines.map((line, index) => {
            const start = index / lines.length;
            const end = (index + 1) / lines.length;
            return (
              <StoryLine
                key={index}
                text={line}
                progress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}

function StoryLine({
    text,
    progress,
    start,
    end,
  }:{
    text: string;
    progress: any;
    start: number;
    end: number;
  }){
  const color = useTransform(
    progress,
    [start, end],
    ["#292929", "#ffffff"]
  );
  return (
    <motion.span style={{color}} className="block font-serif">{text}</motion.span>
  );
}