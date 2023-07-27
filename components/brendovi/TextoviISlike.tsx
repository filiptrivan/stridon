import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  naslovPasusa1: string;
  naslovPasusa2: string;
  naslovPasusa3: string;
  textPasusa1: string;
  textPasusa2: string;
  textPasusa3: string;
  slika1: StaticImageData;
  textDoKraja: string;
  title:string
}

const TextoviISlike = ({
  naslovPasusa1,
  naslovPasusa2,
  naslovPasusa3,
  textPasusa1,
  textPasusa2,
  textPasusa3,
  slika1,
  textDoKraja,
  title
}: Props) => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto p-3 flex flex-col lg:flex-row mb-8 items-center">
        <div>
          <Image
            priority
            src={slika1}
            alt={title}
            width={570}
          />
        </div>
        <div className="max-w-full lg:max-w-[570px] lg:pl-10 mb-4">
          <h2 className="text-4xl font-semibold mb-3">{naslovPasusa1}</h2>
          <p className="text-base sm:text-xl"> {textPasusa1} </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto p-3 flex flex-col lg:flex-row mb-8">
        <div className="max-w-full mb-4">
          <h2 className="text-4xl font-semibold mb-3">{naslovPasusa2}</h2>
          <p className="text-base sm:text-xl"> {textPasusa2} </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto p-3 flex lg:flex-ro mb-8">
        <div className="max-w-full mb-4">
          <h2 className="text-4xl font-semibold mb-3">{naslovPasusa3}</h2>
          <p className="text-base sm:text-xl"> {textPasusa3} </p>
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto p-3 flex flex-col-reverse lg:flex-row mb-20 text-base sm:text-xl">
        {textDoKraja}
      </div>
    </>
  );
};

export default TextoviISlike;
