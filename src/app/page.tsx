"use client";

import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import ThemeToggle from "@/components/nav/ThemeToggle";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="mx-auto">
        <Hero />
      </div>
      <CTA />
      <ThemeToggle />
      <div className="h-screen"></div>
    </div>
  );
}
