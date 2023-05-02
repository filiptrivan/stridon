"use client"
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
    <div className="nav-container">
    <div
      style={{ backgroundColor: `white` }}
      className="fixed left-0 top-0 w-full z-10 shadow-md"
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
        <ul className="hidden sm:flex text-zinc-950">
          <li className="nav-link pb-4 pt-4 pr-7  hover:text-slate-700 duration-200">
            <Link href="/brendovi">
              <div className="flex">
               Brendovi <FaAngleDown className="mt-1 ml-0.5 text-zinc-950" /> 
              </div> 
            </Link>
            <ul>
            <li className="absolute text-transparent cursor-default">
            ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
            </li>
            </ul>
            <div className="dropdown mt-2.5">
              <ul className="leading-5">
                <li className="dropdown-link">
                  <Link href="/brendovi/bosch">Bosch</Link>
                </li>
                <li className="dropdown-link">
                  <Link href="#">DeWalt</Link>
                </li>
                <li className="dropdown-link">
                  <Link href="#">Makita</Link>
                </li>
                <li className="dropdown-link">
                  <Link href="#">Stanley</Link>
                </li>
                <li className="dropdown-link">
                  <Link href="#">Nike</Link>
                </li>
                <li className="dropdown-link">
                  <Link href="#">Adidas</Link>
                </li>
                <li className="dropdown-link">
                  <Link href="#">Puma</Link>
                </li>
                <li className="dropdown-link">
                  <Link href="#">Experimental</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-link pb-4 pt-4 pr-8 hover:text-slate-700 duration-200">
            <Link href="/blog">
              <div className="flex">
               Blog
              </div> 
            </Link>
           
          </li>
          <li className="pb-4 pt-4 pr-8 hover:text-slate-700 duration-200">
            <Link href="/katalozi">Katalozi</Link>
          </li>
          <li className="pb-4 pt-4 pr-8 hover:text-slate-700 duration-200">
            <Link href="/servis">Servis</Link>
          </li>

          <li className="pb-4 pt-4 pr-8 hover:text-slate-700 duration-200">
            <Link href="/contact">Kontakt</Link>
          </li>
          <li className="pb-4 pt-4 pr-2 hover:text-slate-700 duration-200">
            <Link href="/b2b">B2B</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} className="text-white" />
          ) : (
            <AiOutlineMenu size={20} className="text-zinc-950"/>
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex pt-14 pl-6 w-full h-screen bg-black ease-in duration-200 "
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex pt-14 pl-6  w-full h-screen bg-black ease-in duration-200"
          }
        >
          <ul>
            
            <li
              onClick={handleNav}
              className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
            >
              <Link href="/" >Brendovi</Link>
              
            </li>
            
            <li
              onClick={handleNav}
              className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
            >
              <Link href="/#gallery">Blog</Link>
            </li>
            <li
              onClick={handleNav}
              className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
            >
              <Link href="/#work">Katalozi</Link>
            </li>
            <li
              onClick={handleNav}
              className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
            >
              <Link href="/contact">Servis</Link>
            </li>
            <li
              onClick={handleNav}
              className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
            >
              <Link href="/contact">Kontakt</Link>
            </li>
            <li
              onClick={handleNav}
              className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
            >
              <Link href="/contact">B2B</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Navbar;
