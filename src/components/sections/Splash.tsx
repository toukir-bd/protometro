

import Image from "next/image";

export default function Splash() {
  return (
    <>
        <section className="min-h-screen flex flex-col items-center justify-center">
            <Image 
                src="/img/logo-animation.svg"
                alt="Logo"
                width={300}
                height={300}
                className="w-[300px] h-auto px-5"
                priority
            />
            <h1 className="text-[109px] font-black tracking-normal leading-[115px] text-center">
                crafted for the rise <br />
                to web universe
            </h1>
            <p className="mt-8 text-lg text-center text-neutral-400">
                It's never just about building a website, app, or customsoftware. <br />
                it's about creating trust, meaningful connections, and digital <br/>
                experiences that inspire confidence.
            </p>
        </section>
    </>
  );
}