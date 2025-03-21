"use client";

import CTA from "@/components/home/CTA";
import GetInTouch from "@/components/home/GetInTouch";
import Hero from "@/components/home/Hero";
import Strategies from "@/components/home/Strategies";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />

      <CTA />
      <Strategies />
      <GetInTouch />
    </div>
  );
}
