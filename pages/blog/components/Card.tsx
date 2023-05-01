import React from "react";
import Link from "next/link";
import { BlogCardType } from "..";
import DateFormater from "@/pages/components/DateFormater";

interface Props{
  record: BlogCardType;
}

const Card = ({ record }: Props) => {
  return (
    <div className="border max-w-[550px] max-h-[407px] mb-10">
      <Link href={`/blog/${record.slug}`}>
        <div className="mb-2">
          <img
            src={record.main_img}
            alt=""
            className="w-full max-h-[200px] object-cover"
          />
        </div>
      </Link>
      <Link href={"/[slug]"}>
        <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">
          {record.title}
        </div>
      </Link>
      <div className="text-start ml-4 mb-2 text-lg">{record.vrsta.title}</div>
      <div className="border-b pb-2 text-start mx-4 text-base mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
        {record.description}
      </div>
      <div className="text-end mr-4 text-sm mb-2"><DateFormater dateString={record.created_time} /></div>
    </div>
  );
};

export default Card;

