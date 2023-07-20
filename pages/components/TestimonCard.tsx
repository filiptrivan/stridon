import React from "react";
import { Record } from "./TestimonList"
import Image from "next/image";


const TestimonCard = ({ title, image, description }: Record) => {
  return (
    <div className=" max-w-[400px] max-h-[400px] mb-10 border shadow-lg rounded bg-slate-50 mr-4">
      <div className="p-2 sm:ml-4">
        <Image src={image} alt="" width={150} height={150} />
      </div>
      <div className="text-start font-medium ml-2 sm:ml-4 mb-2 text-lg whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div> 

      <div className="pb-2 text-start mx-2 sm:mx-4 text-sm sm:text-base mb-2 font-semibold text-gray-600">
        "{description}"
      </div>
    </div>
  );
};

export default TestimonCard;