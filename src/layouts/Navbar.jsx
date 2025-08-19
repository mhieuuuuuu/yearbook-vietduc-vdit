import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-vietduc.png";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed w-full z-[50] backdrop-blur-md bg-white/70 flex justify-between pl-6 pr-6 md:pl-10 md:pr-10 bg-white shadow-lg transition-transform duration-500 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center ">
          <Link to={"/"}>
            <img
              className=" h-[10vh] md:h-[14vh] hover:cursor-pointer"
              src={logo}
              alt="vietduchighschool"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link to={"/"}>
            <div className="text-xl">Trang chủ</div>
          </Link>
          <Link to={"/kyyeu"}>
            <div className="text-xl">Kỷ yếu</div>
          </Link>
          <Link to={"/gioithieu"}>
            <div className="text-xl">Giới thiệu</div>
          </Link>
        </nav>

        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={28} />
        </button>
      </header>
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-72 bg-white/95 backdrop-blur-md shadow-2xl transition-transform duration-500 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between h-[10vh] pl-6 pr-6 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-6">
          <Link
            to={"/"}
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-red-500 transition-colors"
          >
            Trang chủ
          </Link>
          <Link
            to={"/kyyeu"}
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-red-500 transition-colors"
          >
            Kỷ yếu
          </Link>
          <Link
            to={"/gioithieu"}
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-red-500 transition-colors"
          >
            Giới thiệu
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
