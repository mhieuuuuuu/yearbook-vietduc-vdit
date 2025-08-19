import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ image, title, subtitle, showButton }) => {
  return (
    <section className="relative h-[100vh] overflow-hidden flex items-center justify-center bg-cover bg-center ">
      <img
        src={image}
        className="absolute w-full h-full blur-sm object-cover object-left md:absolute w-full h-full blur-sm object-cover"
      />
      <div className="absolute inset-0 bg-black/25 "></div>
      <div className="flex relative w-full h-full z-10 flex-col justify-center text-white">
        <h1 className="ml-[10vw] text-3xl font-patrick font-bold mb-5 md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="ml-[10vw] text-xl font-patrick w-[75vw] whitespace-pre-line mb-10 md:text-3xl md:w-[35vw]">
            {subtitle}
          </p>
        )}

        {showButton && (
          <button className="ml-0 md:ml-[10vw] border-2 border-pinky self-center md:self-start text-[10px] md:text-base bg-transparent hover:bg-pinky px-6 py-3 rounded-lg font-semibold shadow-lg transition-colors duration-500">
            <Link to={"/kyyeu"}>Bắt đầu ngay</Link>
          </button>
        )}
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-[15vh]
                  bg-gradient-to-b from-transparent via-white/60 via-[85%] to-white to-[100%]"
      ></div>
    </section>
  );
};

export default Hero;
