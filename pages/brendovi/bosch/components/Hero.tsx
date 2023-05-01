import React from "react";

interface HeroProps {
  title: string;
  opis: string;
  naslovButtona: string;
}

const Hero: React.FC<HeroProps> = ({ title, opis, naslovButtona }) => {
  return (
    <div className="flex items-center justify-center mb-12 bg-fixed bg-center bg-cover custom-img custom-img-bosch text-center">
      {/* Overlay */}
      <div className="flex absolute top-0 left-0 right-0 bg-black/60 custom-img-bg " />
      <div className="left-0 w-full z-[2]">
        <div className=" max-w-[1140px] p-3 text-white mx-auto">
          <h1 className="text-6xl mb-2 font-semibold">{title}</h1>
          <p className="text-xl mb-4">{opis}</p>
          <a href="katalog.pdf" download>
            <button className="px-8 py-2 border hover:bg-slate-600 duration-200 m-auto">
              {naslovButtona}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
