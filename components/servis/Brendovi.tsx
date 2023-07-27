import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BrendoviImg from "../../pages/components/BrendoviImg";
import boschlogo from "../../public/boschlogo.png";
import dewaltlogo from "../../public/dewaltlogo.png";
import festool from "../../public/festool-logo.png"
import makita from "../../public/makita-logo.png";
import metabo from "../../public/metabo-logo.png";
import rubi from "../../public/rubi-logo2.png";
import senco from "../../public/senco-logo.png";
import Link from "next/link";

interface BrendoviProps {
  title: string;
}

const Brendovi: React.FC<BrendoviProps> = ({ title }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
            <BrendoviImg brendoviImg={dewaltlogo} />
          </Link>
          <Link href={"/brendovi/bosch"}>
            <BrendoviImg brendoviImg={boschlogo} />
          </Link>
        
          {/* <Link href={"/brendovi/makita"}> */}
            <BrendoviImg brendoviImg={makita} />
            <BrendoviImg brendoviImg={metabo} />
          {/* </Link> */}
          {/* <Link href={"/brendovi/einhell"}> */}
            <BrendoviImg brendoviImg={festool} />
          {/* </Link> */}
          <Link href={"/brendovi/rubi"}>
            <BrendoviImg brendoviImg={rubi} />
          </Link>
          <Link href={"/brendovi/senco"}>
            <BrendoviImg brendoviImg={senco} />
          </Link>
        </Carousel>
      </div>
    </div>
  );
};

export default Brendovi;
