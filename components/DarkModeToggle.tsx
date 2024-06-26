"use client";

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
      className="text-black dark:text-white"
    >
      toggle dark mode
    </button>
  );
}
