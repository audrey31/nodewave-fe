import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Testimony from "./components/Testimony";
import Works from "./components/Works";
import Procedure from "./components/Procedure";
import Applications from "./components/Applications";
import Price from "./components/Price";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="font-poppins">
        <Hero />
        <Products />
        <Testimony />
        <Works />
        <Procedure />
        <Applications />
        <Price />
        <Footer />
      </main>
    </>
  );
}
