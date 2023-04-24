import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `white` }}
      className="fixed left-0 top-0 w-full z-10"
    >
      <div className="max-w-[1140px] m-auto flex justify-between items-center p-2.5 text-white">
        {/* logo */}
        <Link href="/">
          <img
            src="/stridon-prodavnica-alata.webp"
            alt="/"
            width={140}
            height={140}
          />

          {/* nav links */}
        </Link>
        <ul style={{ color: `black` }} className="hidden sm:flex">
          <li className="pb-4 pt-4 pr-8">
            <Link href="/">Početna</Link>
          </li>
          <li className="nav-link pb-4 pt-4 pr-8">
            <Link href="/">Menu </Link>
            <div className="dropdown">
              <ul className="leading-5">
                <li className="dropdown-link">
                  <a href="#">Bosch</a>
                </li>
                <li className="dropdown-link">
                  <a href="#">DeWalt</a>
                </li>
                <li className="dropdown-link">
                  <a href="#">Makita</a>
                </li>
                <li className="dropdown-link">
                  <a href="#">Stanley</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="pb-4 pt-4 pr-8">
            <Link href="/#brands">Brendovi</Link>
          </li>
          <li className="pb-4 pt-4 pr-8">
            <Link href="/#work">Katalog</Link>
          </li>
          <li className="pb-4 pt-4 pr-2">
            <Link href="/contact">Kontakt</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "white" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `black` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#work">Work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
