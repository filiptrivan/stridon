import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface HeroProps {
  titleNaHomePage: string;
  opisNaHomePage: string;
  naslovButtona: string;
}

const Hero: React.FC<HeroProps> = ({ titleNaHomePage, opisNaHomePage, naslovButtona }) => {
  return (
    <div className="flex items-center justify-center mb-12 bg-fixed bg-center bg-cover custom-img custom-img-landing-page text-center">
      {/* Overlay */}
      <div className="flex absolute top-0 left-0 right-0 bg-black/60 custom-img-bg " />
      <div className="left-0 w-full z-[2]">
        <div className=" max-w-[1140px] p-3 text-white mx-auto">
          <h1 className="text-6xl mb-2 font-medium">{titleNaHomePage}</h1>
          <p className="text-xl mb-4">{opisNaHomePage}</p>
          <a href="https://www.prodavnicaalata.rs" target="_blank">
             <button className="px-8 py-2 border rounded-md hover:bg-slate-600 duration-200 flex items-center m-auto">
               {naslovButtona}<FaArrowRight className="ml-2 text-sm"/> 
             </button>
         </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

