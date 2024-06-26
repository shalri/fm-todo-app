import Image from "next/image";
import Header from "../components/Header";
import Todo from "../components/Todo";
import Footer from "../components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
  return (
    <>
      <Header />
      <DarkModeToggle />
      <main className="flex flex-grow flex-col items-center justify-center p-24">
        <Todo />
      </main>
      <Footer />
    </>
  );
}
