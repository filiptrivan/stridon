import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  naslovPasusa1:string;
  naslovPasusa2: string;
  naslovPasusa3: string;
  textPasusa1: string;
  textPasusa2: string;
  textPasusa3: string;
  slika1: StaticImageData;
  slika2: StaticImageData;
  slika3: StaticImageData;
}

const TextoviISlike = ({
  naslovPasusa1,
  naslovPasusa2,
  naslovPasusa3,
  textPasusa1,
  textPasusa2,
  textPasusa3,
  slika1,
  slika2,
  slika3,
}: Props) => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto p-3 flex flex-col-reverse lg:flex-row mb-20">
        <div className="max-w-full lg:max-w-[570px] lg:mb-0">
          <Image
            priority
            src={slika1}
            alt=""
            className="rounded-md w-full"
            width={1920}
            height={1080}
          />
        </div>
        <div className="max-w-full lg:max-w-[570px] lg:pl-10 mb-4">
          <p className="text-4xl font-semibold mb-3">{naslovPasusa1}</p>
          <p> {textPasusa1} </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto p-3 flex flex-col lg:flex-row mb-20">
        <div className="max-w-full lg:max-w-[570px] lg:pr-10 mb-4">
          <p className="text-4xl font-semibold mb-3">{naslovPasusa2}</p>
          <p> {textPasusa2} </p>
        </div>
        <div className="max-w-full lg:max-w-[570px]">
          <Image
            src={slika2}
            alt=""
            className="rounded-md w-full"
            width={1920}
            height={1080}
          />
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto p-3 flex flex-col-reverse lg:flex-row mb-20">
        <div className="max-w-full lg:max-w-[570px] lg:mb-0">
          <Image
            priority
            src={slika3}
            alt=""
            className="rounded-md w-full"
            width={1920}
            height={1080}
          />
        </div>
        <div className="max-w-full lg:max-w-[570px] lg:pl-10 mb-4">
          <p className="text-4xl font-semibold mb-3">{naslovPasusa3}</p>
          <p>
            {" "}
            {textPasusa3}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default TextoviISlike;
