import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "次に(tsugini) | FScode",
  description: "A basic NextJS template for Frontend Mentor Challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} transition-color flex min-h-screen flex-col duration-300 dark:bg-tdd-very-dark-grayish-blue-dark-theme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
