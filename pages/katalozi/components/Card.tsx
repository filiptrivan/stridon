import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const katalozi = [
  {
    id: 1,
    title: "Bosch DIY merni alati",
    slug: "/brendovi/bosch",
    img: "/boschlogo.png",
    pdf_slug: "Cenovnik Bosch DIY mernih alata - JUN 2023 SRB.pdf",
    color: "#05B920",
  },
  {
    id: 2,
    title: "Bosch pribor",
    slug: "/brendovi/bosch",
    img: "/boschlogo.png",
    pdf_slug: "Cenovnik Bosch pribora za mesec jul 2023 - SRB.pdf",
    color: "#FF0000",
  },
  {
    id: 3,
    title: "Bosch Dremel",
    slug: "/brendovi/bosch",
    img: "/boschlogo.png",
    pdf_slug: "Cenovnik Dremel alata i pribora - JUN 2023 SRB.pdf",
    color: "#2967FF",
  },
  {
    id: 4,
    title: "Bosch EXPERT",
    slug: "/brendovi/bosch",
    img: "/boschlogo.png",
    pdf_slug: "EXPERT mini katalog pribora.pdf",
    color: "#2967FF",
  },
  {
    id: 5,
    title: "Bosch Plavi",
    slug: "/brendovi/bosch",
    img: "/boschlogo.png",
    pdf_slug: "Neobavezno preporučeni cenovnik Plavih alata JUL 2023 SRB.pdf",
    color: "#2967FF",
  },
  {
    id: 6,
    title: "Bosch VP cenovnik",
    slug: "/brendovi/bosch",
    img: "/boschlogo.png",
    pdf_slug:
      "Neobavezno preporučeni VP cenovnik PRO Mernih alata  JUN 2023 SRB.pdf",
    color: "#FF0000",
  },
  {
    id: 7,
    title: "GTV katalog",
    slug: "/brendovi/gtv",
    img: "/gtv-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1O7cEdZPw2CyvNTsxmfR7ZpL9GAXlpJ5k/view?usp=drive_link",
    color: "#845EC2",
  },
  {
    id: 8,
    title: "Hogert električarski alati",
    slug: "/brendovi/hogert",
    img: "/hogert-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1hIUpfarX9a1t8VKnGRGQabIm0u2eNwdh/view?usp=drive_link",
    color: "#4F73FF",
  },
  {
    id: 9,
    title: "Hogert HTZ",
    slug: "/brendovi/hogert",
    img: "/hogert-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/16VbxheVuQsX2_aXxc61DBd4Gn0NqcgKZ/view?usp=drive_link",
    color: "#4F73FF",
  },
  {
    id: 10,
    title: "Hogert odeća katalog",
    slug: "/brendovi/hogert",
    img: "/hogert-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1CX8oW1BicRW6SdUNhOAxamVy_Y1dnUCw/view?usp=drive_link",
    color: "#4F73FF",
  },
  {
    id: 11,
    title: "Hogert ručni alati",
    slug: "/brendovi/hogert",
    img: "/hogert-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1hFN3PuIF2n-LS86D3cGeI0sIlmXoMUTe/view?usp=drive_link",
    color: "#4F73FF",
  },
  {
    id: 12,
    title: "Karcher profesionalni program katalog",
    slug: "/brendovi/karcher",
    img: "/karcher-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1rCZ63RGygIn4IeTTar4sLetDzc7UUoaJ/view?usp=drive_link",
    color: "#ECFF44",
  },
  {
    id: 13,
    title: "Karcher žuti program katalog",
    slug: "/brendovi/karcher",
    img: "/karcher-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/14ERZxuCZexyQZ0rNtbBUXGXKjzZm_x5Q/view?usp=drive_link",
    color: "#ECFF44",
  },
  {
    id: 14,
    title: "Knipex katalog",
    slug: "/brendovi/knipex",
    img: "/knipex-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1YgRP6jOCM6D4apCU-mRM_3mNn2yWiTpN/view?usp=drive_link",
    color: "#FF0000",
  },
  {
    id: 15,
    title: "KWB AKKU TOP pribor za aku alate",
    slug: "/brendovi/kwb",
    img: "/kwb-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/14yFw6dV6jnzqwOksY9_AECaI6wX3K8te/view?usp=drive_link",
    color: "#C8C8C8",
  },
  {
    id: 16,
    title: "KWB dodaci za mašine katalog",
    slug: "/brendovi/kwb",
    img: "/kwb-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1CpjLO7fBAU_twmPZy5KfHNJk27BG0MhV/view?usp=drive_link",
    color: "#C8C8C8",
  },
  {
    id: 17,
    title: "KWB pribor",
    slug: "/brendovi/kwb",
    img: "/kwb-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1E06fPvQOqKfLGxCzWH-nh_GQYfK2XtOz/view?usp=drive_link",
    color: "#C8C8C8",
  },
  {
    id: 18,
    title: "MAX katalog",
    slug: "/brendovi/max",
    img: "/max-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1k3AzwfcE_RlB8xJiO1Tp1nZQwrnEyZje/view?usp=drive_link",
    color: "#FFA43B",
  },
  {
    id: 19,
    title: "MTX, Sparta katalog",
    slug: "/brendovi/mtx",
    img: "/mtx-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1wASvbffFJGKsAIN9fb1R48XCrtJmYXkM/view?usp=drive_link",
    color: "#FF5376",
  },
  {
    id: 20,
    title: "Rems akcija 2023",
    slug: "/brendovi/rems",
    img: "/remslogo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1S_H99PFic4pdtzFZOw2lSC0URAo6YFcV/view?usp=drive_link",
    color: "#ECFF44",
  },
  {
    id: 21,
    title: "Rubi akcija 2023",
    slug: "/brendovi/rubi",
    img: "/rubi-logo2.png",
    pdf_slug:
      "https://drive.google.com/file/d/1Pu0Sd3ZYpC0pF6NHKWoyE0qMG8Upuxv7/view?usp=drive_link",
    color: "#FF0000",
  },
  {
    id: 22,
    title: "Wera katalog",
    slug: "/brendovi/wera",
    img: "/wera-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/140HnM3JRm2k_F4iF_j46tbchAST-S45O/view?usp=drive_link",
    color: "#05B920",
  },
  {
    id: 23,
    title: "Wiha katalog",
    slug: "/brendovi/wiha",
    img: "/wiha-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1s2s4TmSn_7inwljmfF0mznbdVXWMGEDJ/view?usp=drive_link",
    color: "#C8C8C8",
  },
  {
    id: 24,
    title: "Wiha merni alati",
    slug: "/brendovi/wiha",
    img: "/wiha-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/196RbKP5DyiWkJnqvOx1ML10Gby4M2CiG/view?usp=drive_link",
    color: "#C8C8C8",
  },
  {
    id: 25,
    title: "Wiha XXL III kofer",
    slug: "/brendovi/wiha",
    img: "/wiha-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1gfqq3qQRqocaSAXVwRm-3s9lGDpyDNbn/view?usp=drive_link",
    color: "#C8C8C8",
  },
  {
    id: 26,
    title: "Wolfcraft katalog",
    slug: "/brendovi/wolfcraft",
    img: "/wolfcraft-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1SU0y0Lr9TvJqvX0t20R44H6HxHLiWaZJ/view?usp=drive_link",
    color: "#53FF6C",
  },
];

const Card = ({ translate }: any) => {
  return (
    <div className="max-w-[1140px] mx-auto p-2 text-center ">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
        {katalozi.map((catalog) => (
          <div
            key={catalog.id}
            className="max-w-[550px] max-h-[550px] mb-10 rounded"
            style={{
              background: `linear-gradient(to top, ${catalog?.color}, ${catalog?.color}50)`,
            }}
          >
            <div className="ml-4">
              <Image
                src={catalog.img}
                alt={catalog.title}
                width={150}
                height={150}
              />
            </div>
            <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">
              {translate(`${catalog.title}`)}
            </div>
            <div className="border-b pb-2 text-start mx-4 text-base mb-2  ">
            {translate(`${catalog.id}`)}
            </div>
            <Link href={`${catalog.slug}`}>
              <div className="text-start ml-4 mb-6 mt-6 text-lg font-semibold flex items-center hover:text-slate-700 duration-200">
                {" "}
                {translate("Idi na brend")} <FaArrowRight className="ml-1 text-sm" />{" "}
              </div>
            </Link>
            <div className="text-start ml-4 mb-2 text-lg font-semibold">
              <ul>
                <li className="nav-link pb-4 pt-4 pr-7 hover:text-slate-700 duration-200 ">
                  <div>
                    <a
                      href={`${catalog.pdf_slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex p-3 px-8 items-center bg-zinc-950 text-gray-200 hover:bg-slate-700 duration-200 rounded">
                        {translate("Pogledaj PDF Katalog")}{" "}
                      </button>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
