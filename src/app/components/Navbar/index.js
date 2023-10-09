"use client";

import React from "react";
import Image from "next/image";
import LogoNodewave from "../../../../public/logo-nodewave.png";
import Link from "next/link";
import {
  FaBars,
  FaXmark,
  FaAngleRight,
  FaRocket,
  FaMobile,
  FaCode,
} from "react-icons/fa6";

import { useState, useEffect } from "react";

function Navbar() {
  const [isBarOpened, setIsBarOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleBarsClicked = () => {
    setIsBarOpened(!isBarOpened);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`font-poppins py-4 fixed w-full ${
          isScrolled ? "bg-zinc-900" : "bg-transparent"
        } z-20 transition ease-in-out duration-300`}
      >
        <div className="container flex justify-between items-center">
          <div className="w-[150px] md:w-auto">
            <Image src={LogoNodewave} />
          </div>
          <nav>
            <ul className="flex items-center">
              <li className="pr-6 hidden md:block">
                <Link href="#">Website</Link>
              </li>
              <li className="pr-6 hidden md:block">
                <Link href="#">Mobile Apps</Link>
              </li>
              <li className="pr-6 hidden md:block">
                <Link href="Portofolio#">Portofolio</Link>
              </li>
              <li className="pr-6 hidden sm:block">
                <button className="btn rounded-[29px]">Make an App</button>
              </li>
              <li className="flex items-center md:hidden">
                <button onClick={handleBarsClicked}>
                  <FaBars className="hover:text-primary text-[26px] transition" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Nav */}
      <div
        className={`fixed h-screen z-[100] w-screen flex transition ease-in-out duration-300 ${
          isBarOpened ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <nav className={`bg-zinc-700 h-screen w-[85vw] py-4 `}>
          <div className="flex justify-end mr-4 mb-4">
            <button onClick={handleBarsClicked}>
              <FaXmark className="hover:text-primary text-[26px] transition" />
            </button>
          </div>

          <ul className="flex flex-col px-4">
            <li className="mb-1">
              <Link
                href="Portofolio#"
                className="flex hover:bg-slate-800 px-4 py-3 rounded-lg items-center justify-between"
              >
                <div className="flex items-center">
                  <FaCode className="mr-4 text-2xl" />
                  <span>Website</span>
                </div>
                <FaAngleRight />
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="Portofolio#"
                className="flex hover:bg-slate-800 px-4 py-3 rounded-lg items-center justify-between"
              >
                <div className="flex items-center">
                  <FaMobile className="mr-4 text-2xl" />
                  <span>Mobile Apps</span>
                </div>
                <FaAngleRight />
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="Portofolio#"
                className="flex hover:bg-slate-800 px-4 py-3 rounded-lg items-center justify-between"
              >
                <div className="flex items-center">
                  <FaRocket className="mr-4 text-2xl" />
                  <span>Portofolio</span>
                </div>
                <FaAngleRight />
              </Link>
            </li>
            <li className="block sm:hidden pt-3">
              <button className="btn rounded-[8px] w-full">Make an App</button>
            </li>
          </ul>
        </nav>
        <div
          className={`${
            isBarOpened
              ? "opacity-0 translate-x-0"
              : "opacity-80 translate-x-[-100%]"
          } flex-1 w-full bg-slate-700 transition ease-in duration-200 z-10`}
        ></div>
      </div>
    </>
  );
}

export default Navbar;
