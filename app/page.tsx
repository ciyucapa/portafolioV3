import Hero from "@/src/components/Hero";
import Header from "../src/components/Header/Header";
import Stack from "@/src/components/Stack";
import Projects from "@/src/components/Projects";
import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div
      className="
        flex
        flex-col
        min-h-screen
        bg-[#06060b]
        font-sans
        overflow-x-hidden
      "
    >
      <Header />

      <Hero />

      <Stack/>

      <Projects/>

      <About/>

      <Contact/>     

      <Footer/>

    </div>
  );
}