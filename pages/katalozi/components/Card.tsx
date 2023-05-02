import React from "react";
import Link from "next/link";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import bos from "../../../public/boschlogo.png"

const Card = () => {
  return (
    <div className="max-w-[1140px] mx-auto p-2 text-center ">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
        <div className=" max-w-[550px] max-h-[550px] mb-10 bg-gradient-to-t from-red-600 to-red-100 rounded">
          <div className="ml-4">
            <Image src={bos} alt="" width={150} height={150} />
          </div>
          <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">
            Bosch
          </div>

          <div className="border-b pb-2 text-start mx-4 text-base mb-2  ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
            rerum eius. Velit magnam accusamus accusantium natus id qui omnis.
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
                  <button className="flex p-3 px-8 items-center bg-zinc-950 text-gray-200 hover:bg-slate-700 duration-200 rounded">
                    Preuzmi PDF Katalog{" "}
                    <FaAngleDown className="ml-0.5 text-gray-200 text-xl" />
                  </button>
                </div>
                <div className="dropdown dropdownbutton">
                  <ul className="">
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className=" max-w-[550px] max-h-[550px] mb-10 bg-gradient-to-t from-yellow-600 to-yellow-100 rounded">
          <div className="ml-4">
            <Image src="/dewaltlogo.png" alt="" width={150} height={150} />
          </div>
          <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">
            Dewalt
          </div>

          <div className="border-b pb-2 text-start mx-4 text-base mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
            rerum eius. Velit magnam accusamus accusantium natus id qui omnis.
          </div>
          <Link href={"/brendovi/dewalt"}>
            <div className="text-start ml-4 mb-6 mt-6 text-lg font-semibold flex items-center hover:text-slate-700 duration-200">
              {" "}
              Idi na brend <FaArrowRight className="ml-1 text-sm" />{" "}
            </div>
          </Link>
          <div className="text-start ml-4 mb-2 text-lg font-semibold">
            <ul>
              <li className="nav-link pb-4 pt-4 pr-7 hover:text-slate-700 duration-200 ">
                <div className="">
                  <button className="flex p-3 px-8 items-center bg-zinc-950 text-gray-200 hover:bg-slate-700 duration-200 rounded">
                    Preuzmi PDF Katalog{" "}
                    <FaAngleDown className="ml-0.5 text-gray-200 text-xl" />
                  </button>
                </div>
                <div className="dropdown dropdownbutton">
                  <ul className="">
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                  </ul>
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
            Bosch
          </div>

          <div className="border-b pb-2 text-start mx-4 text-base mb-2  ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
            rerum eius. Velit magnam accusamus accusantium natus id qui omnis.
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
                  <button className="flex p-3 px-8 items-center bg-zinc-950 text-gray-200 hover:bg-slate-700 duration-200 rounded">
                    Preuzmi PDF Katalog{" "}
                    <FaAngleDown className="ml-0.5 text-gray-200 text-xl" />
                  </button>
                </div>
                <div className="dropdown dropdownbutton">
                  <ul className="">
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                  </ul>
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
            Bosch
          </div>

          <div className="border-b pb-2 text-start mx-4 text-base mb-2  ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
            rerum eius. Velit magnam accusamus accusantium natus id qui omnis.
          </div>
          <Link href={"/bosch"}>
            <div className="text-start ml-4 mb-6 mt-6 text-lg font-semibold flex items-center hover:text-slate-700 duration-200">
              {" "}
              Idi na brend <FaArrowRight className="ml-1 text-sm" />{" "}
            </div>
          </Link>
          <div className="text-start ml-4 mb-2 text-lg font-semibold">
            <ul>
              <li className="nav-link pb-4 pt-4 pr-7 hover:text-slate-700 duration-200 ">
                <div className="">
                  <button className="flex p-3 px-8 items-center bg-zinc-950 text-gray-200 hover:bg-slate-700 duration-200 rounded">
                    Preuzmi PDF Katalog{" "}
                    <FaAngleDown className="ml-0.5 text-gray-200 text-xl" />
                  </button>
                </div>
                <div className="dropdown dropdownbutton">
                  <ul className="">
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className=" max-w-[550px] max-h-[550px] mb-10 bg-gradient-to-t from-yellow-600 to-yellow-100 rounded">
          <div className="ml-4">
            <Image src="/dewaltlogo.png" alt="" width={150} height={150} />
          </div>
          <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">
            Dewalt
          </div>

          <div className="border-b pb-2 text-start mx-4 text-base mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
            rerum eius. Velit magnam accusamus accusantium natus id qui omnis.
          </div>
          <Link href={"/bosch"}>
            <div className="text-start ml-4 mb-6 mt-6 text-lg font-semibold flex items-center hover:text-slate-700 duration-200">
              {" "}
              Idi na brend <FaArrowRight className="ml-1 text-sm" />{" "}
            </div>
          </Link>
          <div className="text-start ml-4 mb-2 text-lg font-semibold">
            <ul>
              <li className="nav-link pb-4 pt-4 pr-7 hover:text-slate-700 duration-200 ">
                <div className="">
                  <button className="flex p-3 px-8 items-center bg-zinc-950 text-gray-200 hover:bg-slate-700 duration-200 rounded">
                    Preuzmi PDF Katalog{" "}
                    <FaAngleDown className="ml-0.5 text-gray-200 text-xl" />
                  </button>
                </div>
                <div className="dropdown dropdownbutton">
                  <ul className="">
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                  </ul>
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
            Bosch
          </div>

          <div className="border-b pb-2 text-start mx-4 text-base mb-2  ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
            rerum eius. Velit magnam accusamus accusantium natus id qui omnis.
          </div>
          <Link href={"/bosch"}>
            <div className="text-start ml-4 mb-6 mt-6 text-lg font-semibold flex items-center hover:text-slate-700 duration-200">
              {" "}
              Idi na brend <FaArrowRight className="ml-1 text-sm" />{" "}
            </div>
          </Link>
          <div className="text-start ml-4 mb-2 text-lg font-semibold">
            <ul>
              <li className="nav-link pb-4 pt-4 pr-7 hover:text-slate-700 duration-200 ">
                <div className="">
                  <button className="flex p-3 px-8 items-center bg-zinc-950 text-gray-200 hover:bg-slate-700 duration-200 rounded">
                    Preuzmi PDF Katalog{" "}
                    <FaAngleDown className="ml-0.5 text-gray-200 text-xl" />
                  </button>
                </div>
                <div className="dropdown dropdownbutton">
                  <ul className="">
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/katalog.pdf" download>
                        Bosch1
                      </a>
                    </li>
                  </ul>
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


