import React from "react";
import Navbar from "../../layouts/Navbar";
import Hero from "../../layouts/Hero";
import Footer from "../../layouts/Footer";
import ScrollToTop from "../../components/scrollToTop";
import heroImg from "../../assets/toa-a.jpg";

const KyYeu = () => {
  return (
    <div className="w-screen h-full m-0 p-0">
      <ScrollToTop />
      <Navbar />
      <Hero image={heroImg} title={"Kỷ yếu"} showButton={false} />
      <Footer />
    </div>
  );
};

export default KyYeu;
