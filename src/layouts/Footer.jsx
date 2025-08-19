import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook, Link as LinkIcon, Bug } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-10 z-20 text-white px-6 md:px-8 pt-16 pb-8 bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.95)] backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto grid gap-8 mb-8 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        <div className="">
          <h3 className=" font-semibold text-lg md:text-xl mb-4 text-pinky">
            Trường THPT Việt Đức
          </h3>
          <p className=" font-light leading-relaxed mb-2 text-sm md:text-base">
            Nơi lưu giữ những kỷ niệm đẹp nhất của tuổi học trò
          </p>
          <p className=" font-light leading-relaxed mb-2 text-sm md:text-base flex gap-2 items-center">
            <MapPin className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" /> Số
            47 Lý Thường Kiệt, Hoàn Kiếm, Hà Nội
          </p>
          <p className=" font-light leading-relaxed mb-2 text-sm md:text-base flex gap-2 items-center">
            <Phone className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" />{" "}
            02438262156
          </p>
        </div>

        <div>
          <h3 className=" font-semibold text-lg md:text-xl mb-4 text-pinky">
            Liên Kết
          </h3>
          <ul className="list-none p-0 font-light leading-relaxed text-sm md:text-base">
            <li className="mb-2">
              <Link
                className=" no-underline transition-colors duration-300 hover:text-pinky"
                to={"/"}
              >
                Trang Chủ
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className=" no-underline transition-colors duration-300 hover:text-pinky"
                to={"/kyyeu"}
              >
                Kỷ Yếu
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className=" no-underline transition-colors duration-300 hover:text-pinky"
                to={"/gioithieu"}
              >
                Giới Thiệu
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className=" font-semibold text-lg md:text-xl mb-4 text-pinky">
            Liên Hệ
          </h3>
          <p className="text-white font-light leading-relaxed mb-2 text-sm md:text-base">
            Trang Facebook và website chính thức của trường
          </p>
          <div class="flex gap-4 mt-4 justify-start">
            <Link
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(243,30,30,0.2)] text-white transition duration-300 hover:bg-pinky hover:-translate-y-0.5"
              to="https://www.facebook.com/Thptvietduchanoi/"
              title="Facebook"
            >
              <Facebook size={20} />
            </Link>
            <Link
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(243,30,30,0.2)] text-white transition duration-300 hover:bg-pinky hover:-translate-y-0.5"
              to="https://c3vietduc.edu.vn/"
              title="Website"
            >
              <LinkIcon size={20} />
            </Link>
            <Link
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(243,30,30,0.2)] text-white transition duration-300 hover:bg-pinky hover:-translate-y-0.5"
              to="#"
              title="Lỗi"
            >
              <Bug size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div
        className="text-center pt-8 border-t border-[#333] 
     font-light text-[#999] text-[10px] md:text-sm"
      >
        <p>THPT Viet Duc</p>
        <p>Designed by Viet Duc Information Technology Club</p>
      </div>
    </footer>
  );
};

export default Footer;
