"use client";

import Hero from "@/components/hero/Hero";
import ThemeToggle from "@/components/nav/ThemeToggle";

export default function Home() {
  return (
    <div>
      <Hero />
      <ThemeToggle />
      <div className="h-screen"></div>
    </div>
  );
}
