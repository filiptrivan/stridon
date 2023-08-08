import Image, { StaticImageData } from "next/image";

interface BrendoviImgProps {
  brendoviImg: StaticImageData;
  title:string;
}

const BrendoviImg: React.FC<BrendoviImgProps> = ({ brendoviImg, title }) => {
  return (
    <div className="relative card">
      <Image 
        priority 
        src={brendoviImg}
        alt={title}
        className="w-full h-full cursor-pointer"
        layout="responsive"
      />
    </div>
  );
};

export default BrendoviImg;
