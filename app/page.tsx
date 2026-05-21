import Hero from "@/src/components/Hero";
import Header from "../src/components/Header/Header";

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

    </div>
  );
}