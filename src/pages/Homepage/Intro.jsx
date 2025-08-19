import React from "react";

const Intro = ({ image, title, subtitle, mirror }) => {
  return (
    <div
      className={`flex flex-col w-full aspect-square md:aspect-auto md:flex-row md:w-full md:h-auto gap-3 ${
        mirror && "md:flex-row-reverse"
      }`}
    >
      <div className="relative w-full h-full md:w-[300px] md:h-[300px] rounded-xl shadow-2xl shadow-gray/40 overflow-hidden group">
        <img
          className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt="ảnh"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black/40 text-white md:hidden">
          <div className="text-[16px] font-bold text-center">{title}</div>
          <div className="text-[10px] text-center">{subtitle}</div>
        </div>
      </div>

      {/* Text box: chỉ hiện ở desktop */}
      <div className="hidden md:flex w-[900px] h-[300px] rounded-xl shadow-2xl shadow-gray/40 pl-10 pr-10 flex-col justify-center gap-3">
        <div className="text-2xl pl-5 border-l-[3px] border-black font-bold">
          {title}
        </div>
        <div className="text-lg text-justify">{subtitle}</div>
      </div>
    </div>
  );
};

export default Intro;
