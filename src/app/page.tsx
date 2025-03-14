"use client";

import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Strategies from "@/components/home/Strategies";
import ThemeToggle from "@/components/nav/ThemeToggle";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="mx-auto">
        <Hero />
      </div>
      <CTA />
      <Strategies />
      <ThemeToggle />
      <div className="h-screen"></div>
    </div>
  );
}
