import React from "react";
import { cn } from "@/components/HomePage/lib/utils";
import { Spotlight } from "@/components/HomePage/ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-full w-full rounded-md flex md:items-center md:justify-center bg-black/[0.90] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="left-0 md:-top-20"
        fill="white"
      />
      <div className="relative z-10 w-full p-4 pt-20 mx-auto max-w-7xl md:pt-0">
        <h1 className="text-4xl font-bold text-center text-transparent bg-opacity-50 md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="max-w-lg mx-auto mt-4 text-base font-normal text-center text-neutral-300">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      </div>
    </div>
  );
}
