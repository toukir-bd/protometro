

import Image from "next/image";

export default function Splash() {
  return (
    <>
        <div className="flex flex-col items-center justify-center relative min-h-screen">
            <div className="absolute inset-0 pointer-events-none w-full h-full z-0">
                <video autoPlay loop muted playsInline preload="metadata" className="initial visible block pointer-events-none h-full object-cover w-full"
                    src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/hero-desktop.mp4">
                </video>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
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
                    It&#39;s never just about building a website, app, or custom software. <br />
                    it&#39;s about creating trust, meaningful connections, and digital <br/>
                    experiences that inspire confidence.
                </p>
            </div>
        </div>
    </>
  );
}