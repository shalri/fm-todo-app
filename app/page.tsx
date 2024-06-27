import Image from "next/image";
import Header from "../components/Header";
import Todo from "../components/Todo";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      {/* <main className="flex flex-grow flex-col justify-center"> */}
      <Todo />
      {/* </main> */}
      <Footer />
    </>
  );
}
