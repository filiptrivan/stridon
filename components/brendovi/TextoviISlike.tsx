import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  naslovPasusa1: string;
  naslovPasusa2: string;
  naslovPasusa3: string;
  naslovPasusa4?: string;
  textPasusa1: string;
  textPasusa2: string;
  textPasusa3: string;
  textPasusa4?: string;
  slika1: StaticImageData;
  textDoKraja: string;
  linkDoProizvodjacaText: string;
  linkDoProizvodjacaUrl: string;
  title:string
}

const TextoviISlike = ({
  naslovPasusa1,
  naslovPasusa2,
  naslovPasusa3,
  naslovPasusa4,
  textPasusa1,
  textPasusa2,
  textPasusa3,
  textPasusa4,
  slika1,
  textDoKraja,
  linkDoProizvodjacaText,
  linkDoProizvodjacaUrl,
  title
}: Props) => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto px-2 py-10 flex flex-col gap-10 lg:gap-16 text-base sm:text-lg whitespace-pre-line">
        <div className="flex flex-col lg:gap-5 lg:flex-row">
          <div className="max-w-full lg:max-w-[570px] lg:pl-0">
            <h2 className="text-4xl">{naslovPasusa1}</h2>
            <span className="separator"></span>
            <p> {textPasusa1} </p>
          </div>
          <div>
            <Image
              priority
              src={slika1}
              alt={title}
              width={570}
            />
          </div>
        </div>

        <div className="max-w-full">
          <h2 className="text-4xl">{naslovPasusa2}</h2>
          <span className="separator"></span>
          <p> {textPasusa2} </p>
        </div>

        <div className="max-w-full">
          <h2 className="text-4xl">{naslovPasusa3}</h2>
          <span className="separator"></span>
          <p> {textPasusa3} </p>
        </div>

        {naslovPasusa4 && textPasusa4 && (
          <div className="max-w-full">
            <h2 className="text-4xl">{naslovPasusa4}</h2>
            <span className="separator"></span>
            <p> {textPasusa4} </p>
          </div>
        )}

        <div>
          {textDoKraja} 
          {linkDoProizvodjacaText && linkDoProizvodjacaUrl && (
            <>
              {" "}
              <a
                className="text-darkerRed"
                href={linkDoProizvodjacaUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkDoProizvodjacaText}
              </a>.
            </>
          )} 
        </div>
      </div>
    </>
  );
};

export default TextoviISlike;
