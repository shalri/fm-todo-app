"use client";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Header() {
  return (
    <header className="mb-7 mt-10 flex w-full items-center justify-between px-6">
      <h1 className="text-[1.6rem] font-bold tracking-[0.70rem] text-white">
        TODO
      </h1>
      <DarkModeToggle />
    </header>
  );
}
