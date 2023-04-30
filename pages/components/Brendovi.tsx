
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BrendoviImg from "./BrendoviImg";
import boschlogo from "../../public/boschlogo.png";
import dewaltlogo from "../../public/dewaltlogo.png" ;


const Brendovi = ({title}) => {
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
    <div id = "brands" className="max-w-[1140px] mx-auto pb-24 pt-4">
      <h1 className="text-2xl font-bold text-center pb-4">{title}</h1>
      {/* div samo za peding od slika brendova */}
      <div className="p-4">
        <Carousel ssr={true} className="z-[1]" centerMode={true} removeArrowOnDeviceType={["tablet", "mobile"]} keyBoardControl={true} infinite={true} draggable={false} responsive={responsive}>
          
            <BrendoviImg brendoviImg={boschlogo}/>
          
            <BrendoviImg brendoviImg={dewaltlogo}/>
          
            <BrendoviImg brendoviImg={boschlogo}/>
          
            <BrendoviImg brendoviImg={boschlogo}/>
          
            <BrendoviImg brendoviImg={boschlogo}/>
          
            <BrendoviImg brendoviImg={boschlogo}/>
          
            <BrendoviImg brendoviImg={boschlogo}/>
          
            <BrendoviImg brendoviImg={boschlogo}/>
          
            <BrendoviImg brendoviImg={boschlogo}/>

        </Carousel>
        </div>
        </div>  
      
  );
};

export default Brendovi;
