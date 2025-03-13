"use client";

import Hero from "@/components/home/Hero";
import ThemeToggle from "@/components/nav/ThemeToggle";

export default function Home() {
  return (
    <div className="tablet:overflow-visible overflow-hidden">
      <Hero />
      <ThemeToggle />
      <div className="h-screen"></div>
    </div>
  );
}
