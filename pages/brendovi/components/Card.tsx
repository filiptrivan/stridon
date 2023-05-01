import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Record } from "./CardList"


const Card = ({ title, image, description, slug }: Record) => {
  return (
    <div className=" max-w-[550px] max-h-[550px] mb-10 bg-gradient-to-t from-zinc-600 to-zinc-200 rounded">
      <div className="ml-4">
        <img src={image} alt="" width={150} height={150} />
      </div>
      <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>

      <div className="border-b pb-2 text-start mx-4 text-base mb-2  ">
        {description}
      </div>
      <Link href={`/brendovi/${slug}`}>
        <div className="text-start ml-4 mb-6 mt-6 text-lg font-semibold flex items-center hover:text-slate-700 duration-200">
          {" "}
          Idi na brend <FaArrowRight className="ml-1 text-sm" />{" "}
        </div>
      </Link>
    </div>
  );
};

export default Card;
