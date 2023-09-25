import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface Herob2bProps {
  titleNaHomePage: string;
  opisNaHomePage: string;
  naslovButtona: string;
  slug: string;
}

const Herob2b: React.FC<Herob2bProps> = ({
  titleNaHomePage,
  opisNaHomePage,
  naslovButtona,
  slug,
}) => {
  return (
    <div className="flex items-center justify-center mb-12 bg-fixed bg-center bg-cover custom-img custom-img-b2b-page text-center">
      {/* Overlay */}
      <div className="flex absolute top-0 left-0 right-0 bg-black/60 custom-img-bg " />
      <div className="left-0 w-full z-[2]">
        <div className=" max-w-[1140px] p-3 text-white mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2 font-medium">{titleNaHomePage}</h1>
          <h2 className="text-base sm:text-xl mb-4">{opisNaHomePage}</h2>
          <button className="px-8 py-2 border rounded-md hover:bg-slate-600 duration-200 flex items-center m-auto">
            <a href={slug} target="_blank" className="flex items-center">
              {naslovButtona}
              <FaArrowRight className="ml-2 text-sm" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herob2b;
