import Image, { StaticImageData } from "next/image";

interface InstagramImgProps {
  socialImg: StaticImageData;
  title: string;
}

const InstagramImg: React.FC<InstagramImgProps> = ({ socialImg, title }) => {
  return (
    <div className="relative">
      <Image
        src={socialImg}
        alt={title}
        className="w-full h-full"
        layout="responsive"
      />
    </div>
  );
};

export default InstagramImg;
