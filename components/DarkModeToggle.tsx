"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      // htmlElement.setAttribute("data-theme", "dark");
      htmlElement.classList.add("dark");
    } else {
      // htmlElement.removeAttribute("data-theme");
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={cn(
        "h-5 w-5 bg-contain bg-no-repeat sm:mb-2 sm:h-[26px] sm:w-[26px]",
        isDarkMode
          ? "bg-[url(/images/icon-sun.svg)]"
          : "bg-[url(/images/icon-moon.svg)]",
      )}
      aria-pressed={isDarkMode}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    ></button>
  );
}
