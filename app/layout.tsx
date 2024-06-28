import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Todo App | FScode",
  description: "Solution for the Todo App challenge Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} transition-color flex min-h-screen flex-col bg-tdl-very-light-grayish-blue bg-[url(/fm-todo-app/images/bg-mobile-light.jpg)] bg-contain bg-top bg-no-repeat duration-300 sm:bg-[url(/fm-todo-app/images/bg-desktop-light.jpg)] dark:bg-tdd-very-dark-blue dark:bg-[url(/fm-todo-app/images/bg-mobile-dark.jpg)] dark:text-white sm:dark:bg-[url(/fm-todo-app/images/bg-desktop-dark.jpg)]`}
      >
        <div className=""></div>
        {children}
      </body>
    </html>
  );
}
