import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { Button } from "../buttons/Button";

const katalozi = [
  {
    id: 27,
    title: "Dewalt najprodavanije 2023",
    slug: "/brendovi/dewalt",
    img: "/dewalt-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1RuMzUGAO4sBoTsBYby_-qGIo5jlFirfP/view?usp=share",
    color: "#ECFF44",
  },
  {
    id: 28,
    title: "Dewalt ograničeno izdanje",
    slug: "/brendovi/dewalt",
    img: "/dewalt-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/13y1RuBHKXtsudGYMzIi67ym4w5rb3jew/view?usp=share",
    color: "#ECFF44",
  },
  {
    id: 1,
    title: "Bosch DIY merni alati",
    slug: "/brendovi/bosch",
    img: "/bosch-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1BK8KkkGrq2n9J9x3M0ZysdQ24MdhjAqe/view?usp=share",
    //zelena
    color: "#05B920",
  },
  {
    id: 2,
    title: "Bosch pribor",
    slug: "/brendovi/bosch",
    img: "/bosch-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1oVevfXbBrPfboKAJIQA62reSEowTyio7/view?usp=share",
    //crvena
    color: "#FF0000",
  },
  {
    id: 3,
    title: "Bosch Dremel",
    slug: "/brendovi/bosch",
    img: "/bosch-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1xdVeZDXHNFhN3AwYE6XSW5dzVtcB_hSG/view?usp=share",
    //plava
    color: "#2967FF",
  },
  {
    id: 4,
    title: "Bosch EXPERT",
    slug: "/brendovi/bosch",
    img: "/bosch-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1rpkCB0d9SXnuQ3Pg1WXzV3yUKCLhICSz/view?usp=share",
    color: "#2967FF",
  },
  {
    id: 5,
    title: "Bosch Plavi",
    slug: "/brendovi/bosch",
    img: "/bosch-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1lEwdsuzYNCMiq997mi2cS2jvPXfc6p88/view?usp=share",
    color: "#2967FF",
  },
  {
    id: 6,
    title: "Bosch VP cenovnik",
    slug: "/brendovi/bosch",
    img: "/bosch-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1966qI7dLpBlcsJkuEoaoxc9XzvShqH-H/view?usp=share",
    color: "#FF0000",
  },
  {
    id: 29,
    title: "Stanley katalog",
    slug: "/brendovi/stanley",
    img: "/stanley-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1B7teaotZAfVehBOZt-ENZvG3kRFScO9i/view?usp=drive_link",
    color: "#ECFF44",
  },
  {
    id: 7,
    title: "GTV katalog",
    slug: "/brendovi/gtv",
    img: "/gtv-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1O7cEdZPw2CyvNTsxmfR7ZpL9GAXlpJ5k/view?usp=share",
    color: "#845EC2",
  },
  {
    id: 8,
    title: "Hogert električarski alati",
    slug: "/brendovi/hogert",
    img: "/hogert-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1hIUpfarX9a1t8VKnGRGQabIm0u2eNwdh/view?usp=share",
    color: "#4F73FF",
  },
  {
    id: 9,
    title: "Hogert HTZ",
    slug: "/brendovi/hogert",
    img: "/hogert-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/16VbxheVuQsX2_aXxc61DBd4Gn0NqcgKZ/view?usp=share",
    color: "#4F73FF",
  },
  {
    id: 10,
    title: "Hogert odeća katalog",
    slug: "/brendovi/hogert",
    img: "/hogert-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1CX8oW1BicRW6SdUNhOAxamVy_Y1dnUCw/view?usp=share",
    color: "#4F73FF",
  },
  {
    id: 11,
    title: "Hogert ručni alati",
    slug: "/brendovi/hogert",
    img: "/hogert-logo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1hFN3PuIF2n-LS86D3cGeI0sIlmXoMUTe/view?usp=share",
    color: "#4F73FF",
  },
  {
    id: 12,
    title: "Karcher profesionalni program katalog",
    slug: "/brendovi/karcher",
    img: "/karcher-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1rCZ63RGygIn4IeTTar4sLetDzc7UUoaJ/view?usp=share",
    color: "#ECFF44",
  },
  {
    id: 13,
    title: "Karcher žuti program katalog",
    slug: "/brendovi/karcher",
    img: "/karcher-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/14ERZxuCZexyQZ0rNtbBUXGXKjzZm_x5Q/view?usp=share",
    color: "#ECFF44",
  },
  {
    id: 14,
    title: "Knipex katalog",
    slug: "/brendovi/knipex",
    img: "/knipex-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1YgRP6jOCM6D4apCU-mRM_3mNn2yWiTpN/view?usp=share",
    color: "#FF0000",
  },
  {
    id: 15,
    title: "KWB AKKU TOP pribor za aku alate",
    slug: "/brendovi/kwb",
    img: "/kwb-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/14yFw6dV6jnzqwOksY9_AECaI6wX3K8te/view?usp=share",
    color: "#C8C8C8",
  },
  {
    id: 16,
    title: "KWB dodaci za mašine katalog",
    slug: "/brendovi/kwb",
    img: "/kwb-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1CpjLO7fBAU_twmPZy5KfHNJk27BG0MhV/view?usp=share",
    color: "#C8C8C8",
  },
  {
    id: 17,
    title: "KWB pribor",
    slug: "/brendovi/kwb",
    img: "/kwb-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1E06fPvQOqKfLGxCzWH-nh_GQYfK2XtOz/view?usp=share",
    color: "#C8C8C8",
  },
  {
    id: 18,
    title: "MAX katalog",
    slug: "/brendovi/max",
    img: "/max-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1k3AzwfcE_RlB8xJiO1Tp1nZQwrnEyZje/view?usp=share",
    color: "#FFA43B",
  },
  {
    id: 19,
    title: "MTX, Sparta katalog",
    slug: "/brendovi/mtx",
    img: "/mtx-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1wASvbffFJGKsAIN9fb1R48XCrtJmYXkM/view?usp=share",
    color: "#FF5376",
  },
  {
    id: 20,
    title: "Rems akcija 2023",
    slug: "/brendovi/rems",
    img: "/remslogo.png",
    pdf_slug:
      "https://drive.google.com/file/d/1S_H99PFic4pdtzFZOw2lSC0URAo6YFcV/view?usp=share",
    color: "#ECFF44",
  },
  {
    id: 21,
    title: "Rubi akcija 2023",
    slug: "/brendovi/rubi",
    img: "/rubi-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1Pu0Sd3ZYpC0pF6NHKWoyE0qMG8Upuxv7/view?usp=share",
    color: "#FF0000",
  },
  {
    id: 22,
    title: "Wera katalog",
    slug: "/brendovi/wera",
    img: "/wera-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/140HnM3JRm2k_F4iF_j46tbchAST-S45O/view?usp=share",
    color: "#05B920",
  },
  {
    id: 23,
    title: "Wiha katalog",
    slug: "/brendovi/wiha",
    img: "/wiha-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1s2s4TmSn_7inwljmfF0mznbdVXWMGEDJ/view?usp=share",
    color: "#C8C8C8",
  },
  {
    id: 24,
    title: "Wiha merni alati",
    slug: "/brendovi/wiha",
    img: "/wiha-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/196RbKP5DyiWkJnqvOx1ML10Gby4M2CiG/view?usp=share",
    color: "#C8C8C8",
  },
  {
    id: 25,
    title: "Wiha XXL III kofer",
    slug: "/brendovi/wiha",
    img: "/wiha-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1gfqq3qQRqocaSAXVwRm-3s9lGDpyDNbn/view?usp=share",
    color: "#C8C8C8",
  },
  {
    id: 26,
    title: "Wolfcraft katalog",
    slug: "/brendovi/wolfcraft",
    img: "/wolfcraft-logo.svg",
    pdf_slug:
      "https://drive.google.com/file/d/1SU0y0Lr9TvJqvX0t20R44H6HxHLiWaZJ/view?usp=share",
    color: "#53FF6C",
  },
];

const Card = ({ translate }: any) => {
  return (
    <div className="max-w-[1140px] mx-auto px-2 py-10 text-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-5">
        {katalozi.map((catalog) => (
          <div
            key={catalog.id}
            className="max-w-[550px] max-h-[550px] sm:mb-4 rounded flex flex-col justify-between"
            style={{
              background: `linear-gradient(to top, ${catalog?.color}, ${catalog?.color}50)`,
            }}
          >
            <div>
              <div className="ml-4 w-[150px]">
                <Image
                  src={catalog.img}
                  alt={catalog.title}
                  width={150}
                  height={79}
                  className="w-[150px] h-[79px]"
                />
              </div>
              <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">
                {translate(`${catalog.title}`)}
              </div>
              <div className="border-b border-stone-700 pb-4 text-start mx-4 text-base mb-4  ">
                {translate(`${catalog.id}`)}
              </div>
            </div>

            <div>
              <Link className="text-start ml-4 mb-4 text-lg font-semibold flex items-center w-fit hover:text-stone-800 duration-200" href={`${catalog.slug}`}>
                  <span>{translate("Idi na brend")}</span>
                  <FaArrowRight className="ml-1 text-sm" />
              </Link>
              <div className="text-start ml-4 mb-4">
                <Button label={translate("Pogledaj PDF katalog")} externalUrl={`${catalog.pdf_slug}`} isSecondary={true}></Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
