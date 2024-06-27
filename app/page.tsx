import Image from "next/image";
import Header from "../components/Header";
import Todo from "../components/Todo";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Todo />
      <Footer />
    </>
  );
}
