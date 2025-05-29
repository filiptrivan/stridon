import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {VscChromeClose} from "react-icons/vsc"
import { FaAngleDown } from "react-icons/fa";
import stridon from "../public/stridon-prodavnica-alata.webp";
import rs from "../public/rs.svg";
import en from "../public/en.svg";

const Navbar = ({ locale, translate }: any) => {
  const [navbar, setNavbar] = useState(false);

  const navHandler = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
      <div className="nav-container">
        <div
          style={{ backgroundColor: `white` }}
          className="fixed left-0 top-0 w-full z-10 shadow-md"
        >
          <div className="max-w-[1140px] m-auto flex justify-between items-center p-2.5 text-white">
            {/* //logo */}
            <Link href="/">
              <Image priority src={stridon} alt="Stridon Logo" width={140} />

              {/* //nav links */}
            </Link>
            <ul className="hidden sm:flex text-zinc-950 items-center">
              <li className="nav-link pb-4 pt-4 pr-7  hover:text-slate-700 duration-200">
                <Link href="/brendovi">
                  <div className="flex">
                    {translate("BrendoviHeader")}
                    <FaAngleDown className="mt-1 ml-0.5 text-zinc-500" />
                  </div>
                </Link>
                <div className="dropdown">
                  <ul className="leading-5">
                    <li className="dropdown-link">
                      <Link href="/brendovi/dewalt">DeWalt</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link href="/brendovi/bosch">Bosch</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link href={"/brendovi/stanley"}>Stanley</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link href={"/brendovi/rems"}>REMS</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link href={"/brendovi/wiha"}>Wiha</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link href={"/brendovi/knipex"}>Knipex</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link href={"/brendovi/gtv"}>GTV</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link href={"/brendovi/max"}>MAX</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link href={"/brendovi/hogert"}>Högert</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link href={"/brendovi"}>{translate("svi brendovi")}</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="pb-4 pt-4 pr-8 hover:text-slate-700 duration-200">
                <Link href="/katalozi">{translate("KataloziHeader")}</Link>
              </li>
              <li className="pb-4 pt-4 pr-8 hover:text-slate-700 duration-200">
                <Link href="/servis">{translate("ServisHeader")}</Link>
              </li>

              <li className="pb-4 pt-4 pr-8 hover:text-slate-700 duration-200">
                <Link href="/kontakt">{translate("KontaktHeader")}</Link>
              </li>
              <li className="pb-4 pt-4 pr-4 hover:text-slate-700 duration-200 ">
                <Link
                  className="border border-red-500 hover:bg-red-100 rounded-md py-1 px-4"
                  href="/b2b"
                >
                  B2B
                </Link>
              </li>
              <li className="pb-4 pt-4 hover:text-slate-700 duration-200 text-xl">
                |
              </li>
              <li>
                <div className="pl-3 flex gap-3">
                  {locale === "sr" ? (
                    <Link href={"/"} locale="en">
                      <Image src={en} alt={translate('TranslateEn')} title={translate('TranslateEn')} width={30} />
                    </Link>
                  ) : (
                    <Link href={"/"} locale="sr">
                      <Image src={rs} alt={translate('TranslateSr')} title={translate('TranslateSr')} width={30} />
                    </Link>
                  )}
                </div>
              </li>
            </ul>

            {/* //Mobile Button */}
            <div onClick={navHandler} className="block sm:hidden z-10">
              {navbar ? (
                <VscChromeClose size={25} className="text-white"  />
              ) : (
                <AiOutlineMenu size={25} className="text-zinc-950" />
              )}
            </div>
            {/* //Mobile Menu */}
            <div
              className={
                navbar
                  ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex pt-14 pl-6 w-full h-screen bg-black ease-in duration-200 "
                  : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex pt-14 pl-6 w-full h-screen bg-black ease-in duration-200"
              }
            >
              <ul>
                <li
                  onClick={navHandler}
                  className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
                >
                  <Link href="/brendovi">{translate("BrendoviFon")}</Link>
                </li>
                <li
                  onClick={navHandler}
                  className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
                >
                  <Link href="/katalozi">{translate("KataloziFon")}</Link>
                </li>
                <li
                  onClick={navHandler}
                  className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
                >
                  <Link href="/servis">{translate("ServisFon")}</Link>
                </li>
                <li
                  onClick={navHandler}
                  className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
                >
                  <Link href="/kontakt">{translate("KontaktFon")}</Link>
                </li>
                <li
                  onClick={navHandler}
                  className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
                >
                  <Link href="/b2b">B2B</Link>
                </li>
                <li
                  onClick={navHandler}
                  className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
                >
                  <Link href="/onama">{translate("O namaFon")}</Link>
                </li>
                <li
                  onClick={navHandler}
                  className="pl-0 pt-3 pb-3 text-2xl"
                >
                  {locale === "sr" ? (
                    <Link href={"/"} locale="en">
                      <Image src={en} alt={translate('TranslateEn')} title={translate('TranslateEn')} width={40} />
                    </Link>
                  ) : (
                    <Link href={"/"} locale="sr">
                      <Image src={rs} alt={translate('TranslateSr')} title={translate('TranslateSr')} width={40} />
                    </Link>
                  )}
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
