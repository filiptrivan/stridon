import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BrendoviImg from "../../components/BrendoviImg";
import boschLogo from "../../public/bosch-logo.svg";
import dewaltLogo from "../../public/dewalt-logo.svg";
import festoolLogo from "../../public/festool-logo.png"
import makitaLogo from "../../public/makita-logo.png";
import metaboLogo from "../../public/metabo-logo.png";
import rubiLogo from "../../public/rubi-logo.svg";
import sencoLogo from "../../public/senco-logo.svg";
import Link from "next/link";

interface BrendoviProps {
  title: string;
  textBelowTitle: string;
}

const Brendovi: React.FC<BrendoviProps> = ({ title, textBelowTitle }) => {
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
        {title}
      </h2>
      <div className="text-base sm:text-lg mb-9">
        {textBelowTitle}
      </div>
      <div className="px-4 pt-2 py-4">
        <Carousel
          ssr={true}
          className="z-[1]"
          centerMode={true}
          keyBoardControl={true}
          infinite={true}
          draggable={false}
          responsive={responsive}
          swipeable={false}
        >
          <Link href={"/brendovi/dewalt"}>
            <BrendoviImg brendoviImg={dewaltLogo} title="DeWalt"/>
          </Link>
          <Link href={"/brendovi/bosch"}>
            <BrendoviImg brendoviImg={boschLogo} title="Bosch"/>
          </Link>
        
          <BrendoviImg brendoviImg={makitaLogo} title="Makita"/>
          <BrendoviImg brendoviImg={metaboLogo} title="Metabo"/>
          <BrendoviImg brendoviImg={festoolLogo} title="Festool"/>

          <Link href={"/brendovi/rubi"}>
            <BrendoviImg brendoviImg={rubiLogo} title="Rubi"/>
          </Link>
          <Link href={"/brendovi/senco"}>
            <BrendoviImg brendoviImg={sencoLogo} title="Senco"/>
          </Link>
        </Carousel>
      </div>
    </div>
  );
};

export default Brendovi;
