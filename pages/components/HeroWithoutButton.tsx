import React from "react";

interface HeroWithoutButtonProps {
  titleNaHomePage: string;
  opisNaHomePage: string;
}

const HeroWithoutButton: React.FC<HeroWithoutButtonProps> = ({titleNaHomePage, opisNaHomePage}) => {
  return (
    <div className="flex items-center justify-center mb-12 bg-fixed bg-center bg-cover custom-img custom-img-landing-page text-center">
      {/* Overlay */}
      <div className="flex absolute top-0 left-0 right-0 bg-black/60 custom-img-bg " />
      <div className="left-0 w-full z-[2]">
        <div className=" max-w-[1140px] p-3 text-white mx-auto">
          <h1 className="text-6xl mb-2 font-semibold">{titleNaHomePage}</h1>
          <p className="text-xl mb-4">{opisNaHomePage}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroWithoutButton;