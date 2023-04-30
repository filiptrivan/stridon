import React from "react";
import Link from "next/link";

// interface

const Card = ({ keyy ,title, text, date, image, type}) => {
  return (
      <div className="border max-w-[550px] max-h-[407px] mb-10" key={keyy}>
        <Link href={"/[slug]"}>
          <div className="mb-2">
            <img
              src={image}
              alt=""
              className="w-full max-h-[200px] object-cover"
            />
          </div>
        </Link>
        <Link href={"/[slug]"}>
          <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </div>
        </Link>
        <div className="text-start ml-4 mb-2 text-lg">{type}</div>
        <div className="border-b pb-2 text-start mx-4 text-base mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {text}
        </div>
        <div className="text-end mr-4 text-sm mb-2">{date}</div>
      </div>
  );
};

export default Card;
