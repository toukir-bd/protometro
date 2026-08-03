

import Image from "next/image";

export default function Splash() {
  return (
    <>
        <div className="flex flex-col items-center justify-center relative min-h-screen">
            <div className="absolute inset-0 pointer-events-none w-full min-h-screen z-0">
                <video autoPlay loop muted playsInline preload="metadata" className="initial visible block pointer-events-none h-full object-cover w-full" src="/videos/hero.mp4">
                </video>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-[#061018]/70 z-1"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#061018]/20 to-[#061018]/0 z-1 flex flex-col items-center justify-center">
                    <Image
                        src="/img/logo-animation.svg"
                        alt="BeRiser Logo"
                        width={300}
                        height={300}
                        className="w-full max-w-[300px] h-auto px-5"
                        priority
                    />
                    <h1 className="text-[109px] font-black tracking-normal leading-[115px] text-center">
                        crafted for the rise <br />
                        to web universe
                    </h1>
                    <p className="mt-8 mb-12 text-lg text-center text-neutral-400">
                        It's never just about building a website, app, or custom software. <br />
                        it's about creating trust, meaningful connections, and digital <br/>
                        experiences that inspire confidence.
                    </p>
                </div>
            </div>
        </div>
    </>
  );
}