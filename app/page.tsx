"use client";
import { useEffect, useRef } from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Head from "next/head";
import { metaData } from "@/config/metaConfig";

export default function Home() {
  const videoRef = useRef(null);

  const meta = metaData.home;
   
    useEffect(() => {
      const baseTitle = `${meta.metaTitle}`;
      const space = " ".repeat(1);
      const fullTitle = baseTitle ; 
      let offset = 0;
  
      const animateTitle = () => {
        const titleText = fullTitle;  
        let newOffset = offset;
        
        newOffset = offset;
        document.title = titleText.substring(newOffset, newOffset + baseTitle.length); 
  
        offset = (offset + 1) % baseTitle.length;  
      };
  
      const intervalId = setInterval(animateTitle, 250); 
      return () => clearInterval(intervalId);
    }, [meta.metaTitle]);

  return (
    <>
      <Head>
        <title>{meta.metaTitle}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:url" content={meta.ogUrl} />
        <meta property="og:image" content={meta.ogImage} />
        <meta name="twitter:title" content={meta.twitterTitle} />
        <meta name="twitter:description" content={meta.twitterDescription} />
        <meta name="twitter:image" content={meta.twitterImage} />
      </Head>
      <section className="relative w-full h-screen">
        {/* Video */}
        <video ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover brightness-50" autoPlay muted loop >
          <source src="./images/lastikborsasivideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Yazı */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-y-2">
              <img src="./images/lb-logo.png" alt="" className="w-52 sm:w-64 md:w-80" />
              <h1 
                className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:ml-4 flex items-center pt-3">
                Developer Portal
              </h1>
            </div>
            <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, esse.</p>
            <Link href="/docs">
              <Button className="bg-gradient-to-tr from-[#FA8728] to-orange-600 text-white" radius="lg">
                Başla
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}