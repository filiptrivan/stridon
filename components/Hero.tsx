import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "./buttons/Button";
import MyModal from "./MyModal";

interface HeroProps {
  translate: any;
  titleNaHomePage: string;
  titleBelow?: string;
  opisNaHomePage: string;
  naslovButtona?: string;
  externalUrl?: string;
  bigTitle?: boolean;
  catalogueValues?: {
    imeKataloga: string;
    rutaKataloga: string;
  }[];
}

const Hero: React.FC<HeroProps> = ({
  translate,
  titleNaHomePage,
  titleBelow,
  opisNaHomePage,
  naslovButtona,
  externalUrl,
  bigTitle = true,
  catalogueValues,
}) => {
  const [visible, setVisible] = useState(false);
  const handleOnClose = () => {
    setVisible(false);
  };
  
  return (
    <div className="flex items-center justify-center py-28 text-center bg-stone-50 relative overflow-hidden">
      <div className="max-w-[1140px] p-3 mx-auto z-10">
        <h1 className={`${bigTitle ? 'lg:text-8xl' : 'lg:text-7xl'} text-5xl md:text-6xl mb-3 bg-gradient-to-r from-lighterRed to-darkerRed inline-block text-transparent bg-clip-text pb-2 font-bold`}>
          <div>
            {titleNaHomePage}
          </div>
          <div>
            {titleBelow}
          </div>
        </h1>
        <div className={`text-base sm:text-xl ${naslovButtona ? 'mb-9' : 'mb-0'}`}>{opisNaHomePage}</div>
        { externalUrl && naslovButtona &&
          <div className="flex justify-center">
            <Button label={naslovButtona} icon={<FaArrowRight/>} externalUrl={externalUrl}></Button>
          </div>
        }
        { catalogueValues && naslovButtona &&
          <div className="flex justify-center">
            <Button label={naslovButtona} onClick={() => setVisible(true)}></Button>
          </div>
        }
      </div>
      <MyModal
        translate={translate}
        catalogueValues={catalogueValues}
        onClose={handleOnClose}
        visible={visible}
      />
      <img className="absolute right-0 w-[600px] opacity-10 sm:opacity-30 rotate-45 sm:rotate-0" src="/drill-electric.svg" alt="Drill as hero's background" />
    </div>
  );
};

export default Hero;
