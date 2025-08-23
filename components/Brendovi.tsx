import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BrendoviImg from "./BrendoviImg";
import bosch from "../public/bosch-logo.svg";
import dewalt from "../public/dewalt-logo.svg";
import stanley from "../public/stanley-logo.svg";
import knipex from "../public/knipex-logo.svg";
import hoegert from "../public/hogert-logo.png";
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
import { Button } from "./buttons/Button";

interface BrendoviProps {
  translate: any;
}

const Brendovi: React.FC<BrendoviProps> = ({ translate }) => {
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
    <div id="brands" className="max-w-[1140px] mx-auto py-20 px-4 text-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primaryRed">
        {translate("brendovi")}
      </h2>
      <div className="text-base sm:text-lg mb-9">
        {translate('HomepageBrandsTextBelowTitle')}
      </div>
      <div className="mb-9">
        <Carousel
          ssr={true}
          className="z-[1]"
          centerMode={true}
          keyBoardControl={true}
          infinite={true}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          pauseOnHover
          arrows={false}
          draggable={true}
          swipeable={true}
          customTransition="transform 1000ms ease-in-out"
          transitionDuration={1000}
        >
          <Link href={"/brendovi/dewalt"}>
            <BrendoviImg brendoviImg={dewalt} title="DeWalt Logo" />
          </Link>

          <Link href={"/brendovi/stanley"}>
            <BrendoviImg brendoviImg={stanley} title="Stanley Logo" />
          </Link>

          <Link href={"/brendovi/bosch"}>
            <BrendoviImg brendoviImg={bosch} title="Bosch Logo" />
          </Link>

          <Link href={"/brendovi/knipex"}>
            <BrendoviImg brendoviImg={knipex} title="Knipex Logo" />
          </Link>

          <Link href={"/brendovi/wiha"}>
            <BrendoviImg brendoviImg={wiha} title="Wiha Logo" />
          </Link>

          <Link href={"/brendovi/hogert"}>
            <BrendoviImg brendoviImg={hoegert} title="Hogert Logo" />
          </Link>

          <Link href={"/brendovi/gtv"}>
            <BrendoviImg brendoviImg={gtv} title="GTV Logo" />
          </Link>

          <Link href={"/brendovi/rems"}>
            <BrendoviImg brendoviImg={rems} title="Rems Logo" />
          </Link>

          <Link href={"/brendovi/max"}>
            <BrendoviImg brendoviImg={max} title="Max Logo" />
          </Link>

          <Link href={"/brendovi/wera"}>
            <BrendoviImg brendoviImg={wera} title="Wera Logo" />
          </Link>

          <Link href={"/brendovi/mtx"}>
            <BrendoviImg brendoviImg={mtx} title="MTX Logo" />
          </Link>

          <Link href={"/brendovi/sgtools"}>
            <BrendoviImg brendoviImg={sgtools} title="SGTools Logo" />
          </Link>

          <Link href={"/brendovi/blackdecker"}>
            <BrendoviImg brendoviImg={blackdecker} title="Black+Decker Logo" />
          </Link>

          <Link href={"/brendovi/rubi"}>
            <BrendoviImg brendoviImg={rubi} title="Rubi Logo" />
          </Link>

          <Link href={"/brendovi/senco"}>
            <BrendoviImg brendoviImg={senco} title="Senco Logo" />
          </Link>
        </Carousel>
      </div>
      <div className="flex justify-center">
        <Button label={translate("svi brendovi")} url="/brendovi" />
      </div>
    </div>
  );
};

export default Brendovi;
