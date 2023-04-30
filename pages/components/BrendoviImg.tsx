import Image, { StaticImageData } from "next/image";
import React from "react";

interface BrendoviImgProps {
  brendoviImg: StaticImageData;
}

const BrendoviImg: React.FC<BrendoviImgProps> = ({ brendoviImg }) => {
  return (
    <div className="relative card">
      <Image
        src={brendoviImg}
        alt="/"
        className="w-full h-full cursor-pointer"
        layout="responsive"
      />
    </div>
  );
};

export default BrendoviImg;
