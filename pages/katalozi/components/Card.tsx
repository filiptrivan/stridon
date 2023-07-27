import React from "react";
import Link from "next/link";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import bos from "../../../public/boschlogo.png";
import dewalt from "../../../public/dewaltlogo.png";

const Card = () => {
  return (
    <div className="max-w-[1140px] mx-auto p-2 text-center ">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
        <div className=" max-w-[550px] max-h-[550px] mb-10 bg-gradient-to-t from-red-600 to-red-100 rounded">
          <div className="ml-4">
            <Image src={bos} alt="" width={150} height={150} />
          </div>
          <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">
            Bosch DIY merni alati
          </div>

          <div className="border-b pb-2 text-start mx-4 text-base mb-2  ">
            Upoznajte se sa najnovijim cenovnikom Bosch DIY mernih alata za jun
            2023. Ovaj sveobuhvatni cenovnik donosi najaktuelnije informacije o
            raspoloživim mernim alatima za kućne majstore i entuzijaste.
          </div>
          <Link href={"/brendovi/bosch"}>
            <div className="text-start ml-4 mb-6 mt-6 text-lg font-semibold flex items-center hover:text-slate-700 duration-200">
              {" "}
              Idi na brend <FaArrowRight className="ml-1 text-sm" />{" "}
            </div>
          </Link>
          <div className="text-start ml-4 mb-2 text-lg font-semibold">
            <ul>
              <li className="nav-link pb-4 pt-4 pr-7 hover:text-slate-700 duration-200 ">
                <div className="">
                  <a
                    href="/Cenovnik Bosch DIY mernih alata - JUN 2023 SRB.pdf"
                    rel="noopener noreferrer"
                    download
                  >
                    <button className="flex p-3 px-8 items-center bg-zinc-950 text-gray-200 hover:bg-slate-700 duration-200 rounded">
                      Preuzmi PDF Katalog{" "}
                    </button>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className=" max-w-[550px] max-h-[550px] mb-10 bg-gradient-to-t from-yellow-600 to-yellow-100 rounded">
          <div className="ml-4">
            <Image src={bos} alt="" width={150} height={150} />
          </div>
          <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">
            Bosch pribor
          </div>

          <div className="border-b pb-2 text-start mx-4 text-base mb-2">
            Otkrijte najnovije ponude u našem cenovniku Bosch pribora za mesec
            jul 2023. Pregledajte bogat izbor vrhunskog Bosch pribora koji će
            unaprediti vaše alate i olakšati vaše projekte.
          </div>
          <Link href={"/brendovi/bosch"}>
            <div className="text-start ml-4 mb-6 mt-6 text-lg font-semibold flex items-center hover:text-slate-700 duration-200">
              {" "}
              Idi na brend <FaArrowRight className="ml-1 text-sm" />{" "}
            </div>
          </Link>
          <div className="text-start ml-4 mb-2 text-lg font-semibold">
            <ul>
              <li className="nav-link pb-4 pt-4 pr-7 hover:text-slate-700 duration-200 ">
                <div className="">
                  <a
                    href="/Cenovnik Bosch pribora za mesec jul 2023 - SRB.pdf"
                    rel="noopener noreferrer"
                    download
                  >
                    <button className="flex p-3 px-8 items-center bg-zinc-950 text-gray-200 hover:bg-slate-700 duration-200 rounded">
                      Preuzmi PDF Katalog{" "}
                    </button>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border max-w-[550px] max-h-[550px] mb-10 bg-gradient-to-t from-slate-700 to-slate-200 rounded">
          <div className="ml-4">
            <Image src={bos} alt="" width={150} height={150} />
          </div>
          <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">
            Bosch Dremel
          </div>

          <div className="border-b pb-2 text-start mx-4 text-base mb-2  ">
            Istražite najnoviji cenovnik Dremel alata i pribora za jun 2023. U
            našem cenovniku možete pronaći bogat izbor visokokvalitetnih Dremel
            alata i pribora koji će ispuniti sve vaše kreativne potrebe.
          </div>
          <Link href={"/brendovi/bosch"}>
            <div className="text-start ml-4 mb-6 mt-6 text-lg font-semibold flex items-center hover:text-slate-700 duration-200">
              {" "}
              Idi na brend <FaArrowRight className="ml-1 text-sm" />{" "}
            </div>
          </Link>
          <div className="text-start ml-4 mb-2 text-lg font-semibold">
            <ul>
              <li className="nav-link pb-4 pt-4 pr-7 hover:text-slate-700 duration-200 ">
                <div className="">
                  <a
                    href="/Cenovnik Dremel alata i pribora - JUN 2023 SRB.pdf"
                    rel="noopener noreferrer"
                    download
                  >
                    <button className="flex p-3 px-8 items-center bg-zinc-950 text-gray-200 hover:bg-slate-700 duration-200 rounded">
                      Preuzmi PDF Katalog{" "}
                    </button>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className=" max-w-[550px] max-h-[550px] mb-10 bg-gradient-to-t from-red-600 to-red-100 rounded">
          <div className="ml-4">
            <Image src={bos} alt="" width={150} height={150} />
          </div>
          <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">
            Bosch EXPERT
          </div>

          <div className="border-b pb-2 text-start mx-4 text-base mb-2  ">
            Upoznajte se sa našim "EXPERT Mini katalogom pribora"! U ovom
            posebnom izdanju, predstavljamo vam široku paletu visokokvalitetnog
            pribora koji će zadovoljiti sve vaše potrebe.
          </div>
          <Link href={"/brendovi/bosch"}>
            <div className="text-start ml-4 mb-6 mt-6 text-lg font-semibold flex items-center hover:text-slate-700 duration-200">
              {" "}
              Idi na brend <FaArrowRight className="ml-1 text-sm" />{" "}
            </div>
          </Link>
          <div className="text-start ml-4 mb-2 text-lg font-semibold">
            <ul>
              <li className="nav-link pb-4 pt-4 pr-7 hover:text-slate-700 duration-200 ">
                <div className="">
                  <a
                    href="/EXPERT mini katalog pribora.pdf"
                    rel="noopener noreferrer"
                    download
                  >
                    <button className="flex p-3 px-8 items-center bg-zinc-950 text-gray-200 hover:bg-slate-700 duration-200 rounded">
                      Preuzmi PDF Katalog{" "}
                    </button>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className=" max-w-[550px] max-h-[550px] mb-10 bg-gradient-to-t from-yellow-600 to-yellow-100 rounded">
          <div className="ml-4">
            <Image src={bos} alt="" width={150} height={150} />
          </div>
          <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">
            Bosch Plavi alati
          </div>
          <div className="border-b pb-2 text-start mx-4 text-base mb-2">
            Pregledajte naš neobavezno preporučeni cenovnik Plavih alata za jul
            2023. Ovaj cenovnik donosi vam širok izbor vrhunskih alata koji su
            sinonim za kvalitet i pouzdanost.
          </div>
          <Link href={"/brendovi/bosch"}>
            <div className="text-start ml-4 mb-6 mt-6 text-lg font-semibold flex items-center hover:text-slate-700 duration-200">
              {" "}
              Idi na brend <FaArrowRight className="ml-1 text-sm" />{" "}
            </div>
          </Link>
          <div className="text-start ml-4 mb-2 text-lg font-semibold">
            <ul>
              <li className="nav-link pb-4 pt-4 pr-7 hover:text-slate-700 duration-200 ">
                <div className="">
                  <a
                    href="/Neobavezno preporučeni cenovnik Plavih alata JUL 2023 SRB.pdf"
                    rel="noopener noreferrer"
                    download
                  >
                    <button className="flex p-3 px-8 items-center bg-zinc-950 text-gray-200 hover:bg-slate-700 duration-200 rounded">
                      Preuzmi PDF Katalog{" "}
                    </button>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border max-w-[550px] max-h-[550px] mb-10 bg-gradient-to-t from-slate-700 to-slate-200 rounded">
          <div className="ml-4">
            <Image src={bos} alt="" width={150} height={150} />
          </div>
          <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">
            Bosch VP cenovnik
          </div>

          <div className="border-b pb-2 text-start mx-4 text-base mb-2  ">
            Pregledajte naš neobavezno preporučeni VP cenovnik PRO Mernih alata
            za jun 2023. U ovom cenovniku vam donosimo širok asortiman vrhunskih
            PRO Mernih alata koji su dizajnirani za profesionalce i
            najzahtevnije projekte.
          </div>
          <Link href={"/brendovi/bosch"}>
            <div className="text-start ml-4 mb-6 mt-6 text-lg font-semibold flex items-center hover:text-slate-700 duration-200">
              {" "}
              Idi na brend <FaArrowRight className="ml-1 text-sm" />{" "}
            </div>
          </Link>
          <div className="text-start ml-4 mb-2 text-lg font-semibold">
            <ul>
              <li className="nav-link pb-4 pt-4 pr-7 hover:text-slate-700 duration-200 ">
                <div className="">
                  <a
                    href="/Neobavezno preporučeni VP cenovnik PRO Mernih alata  JUN 2023 SRB.pdf"
                    rel="noopener noreferrer"
                    download
                  >
                    <button className="flex p-3 px-8 items-center bg-zinc-950 text-gray-200 hover:bg-slate-700 duration-200 rounded">
                      Preuzmi PDF Katalog{" "}
                    </button>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
