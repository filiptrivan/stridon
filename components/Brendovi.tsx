import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BrendoviImg from "./BrendoviImg";
import bosch from "../public/bosch-logo.svg";
import dewalt from "../public/dewalt-logo.svg";
import stanley from "../public/stanley-logo.svg";
import knipex from "../public/knipex-logo.svg";
import hoegert from "../public/hogert-logo.png";
import karcher from "../public/karcher-logo.svg";
import wiha from "../public/wiha-logo.svg";
import gtv from "../public/gtv-logo.png";
import rems from "../public/remslogo.png";
import sgtools from "../public/sg-tools-logo.png";
import max from "../public/max-logo.svg";
import wera from "../public/wera-logo.svg";
import mtx from "../public/mtx-logo.svg";
import blackdecker from "../public/black-and-decker-logo.svg";
import rubi from "../public/rubi-logo.svg";
import senco from "../public/senco-logo.svg";
import Link from "next/link";

interface BrendoviProps {
  title: string;
}

const Brendovi: React.FC<BrendoviProps> = ({ title }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div id="brands" className="max-w-[1140px] mx-auto pb-10 pt-4">
      <h2 className="text-2xl sm:text-3xl  font-medium text-center pb-6">
        {title}
      </h2>
      {/* div samo za peding od slika brendova */}
      <div className="px-4 pt-2 py-4">
        <Carousel
          ssr={true}
          className="z-[1]"
          centerMode={true}
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          keyBoardControl={true}
          infinite={true}
          draggable={false}
          responsive={responsive}
          swipeable={false}
        >
          <Link href={"/brendovi/dewalt"}>
            <BrendoviImg brendoviImg={dewalt} title="DeWalt" />
          </Link>

          <Link href={"/brendovi/stanley"}>
            <BrendoviImg brendoviImg={stanley} title="Stanley" />
          </Link>

          <Link href={"/brendovi/bosch"}>
            <BrendoviImg brendoviImg={bosch} title="Bosch" />
          </Link>

          <Link href={"/brendovi/knipex"}>
            <BrendoviImg brendoviImg={knipex} title="Knipex" />
          </Link>

          <Link href={"/brendovi/wiha"}>
            <BrendoviImg brendoviImg={wiha} title="Wiha" />
          </Link>

          <Link href={"/brendovi/hogert"}>
            <BrendoviImg brendoviImg={hoegert} title="Hogert" />
          </Link>

          <Link href={"/brendovi/gtv"}>
            <BrendoviImg brendoviImg={gtv} title="GTV" />
          </Link>

          <Link href={"/brendovi/rems"}>
            <BrendoviImg brendoviImg={rems} title="Rems" />
          </Link>

          <Link href={"/brendovi/max"}>
            <BrendoviImg brendoviImg={max} title="Max" />
          </Link>

          <Link href={"/brendovi/karcher"}>
            <BrendoviImg brendoviImg={karcher} title="Karcher" />
          </Link>

          <Link href={"/brendovi/wera"}>
            <BrendoviImg brendoviImg={wera} title="Wera" />
          </Link>

          <Link href={"/brendovi/mtx"}>
            <BrendoviImg brendoviImg={mtx} title="MTX" />
          </Link>

          <Link href={"/brendovi/sgtools"}>
            <BrendoviImg brendoviImg={sgtools} title="SGTools" />
          </Link>

          <Link href={"/brendovi/blackdecker"}>
            <BrendoviImg brendoviImg={blackdecker} title="Black+Decker" />
          </Link>

          <Link href={"/brendovi/rubi"}>
            <BrendoviImg brendoviImg={rubi} title="Rubi" />
          </Link>

          <Link href={"/brendovi/senco"}>
            <BrendoviImg brendoviImg={senco} title="Senco" />
          </Link>
        </Carousel>
      </div>
    </div>
  );
};

export default Brendovi;
