import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Card = ({ title, image, slug, translate }: any) => {
  return (
    <div className="max-w-[550px] max-h-[550px] mb-10 bg-gradient-to-t from-stone-600 to-stone-200 rounded">
      <div className="ml-4 w-[150px] mt-1">
        <img
        src={image} 
        alt={title} 
        width="150"
        height="79" 
        />
      </div>
      <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>

      <div className="border-b border-stone-700 pb-2 text-start mx-4 text-base mb-4">
        {translate(`${title}`)}
      </div>
      <Link className="text-start ml-4 mb-4 text-lg font-semibold flex items-center w-fit hover:text-stone-800 duration-200" href={`/brendovi/${slug}`}>
          <span>{translate("Idi na brend")}</span>
          <FaArrowRight className="ml-1 text-sm" />
      </Link>
    </div>
  );
};

export default Card;
