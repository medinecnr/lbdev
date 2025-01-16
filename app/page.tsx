"use client";
import { useRef } from "react";
import {Button} from "@nextui-org/react";

export default function Home() {
  const videoRef = useRef(null);

  return (
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
          <Button className="bg-gradient-to-tr from-[#FA8728] to-orange-600 text-white" radius="lg">
            Başla
          </Button>
        </div>
      </div>
    </section>
  );
}