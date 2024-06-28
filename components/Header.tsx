"use client";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Header() {
  return (
    <header className="mx-auto mb-7 mt-10 flex w-full max-w-[588px] items-center justify-between px-6 sm:mt-[70px]">
      <h1 className="text-[1.6rem] font-bold tracking-[0.70rem] text-white sm:text-[2.525rem] sm:tracking-[0.85rem]">
        TODO
      </h1>
      <DarkModeToggle />
    </header>
  );
}
