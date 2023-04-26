"use client"

import { useRouter } from "next/router";
import Records from "../blogovi.json";
import Link from "next/link";


const Card = () => {
  const router = useRouter();
  return (
    <div>
      <div className="max-w-[1140px] mx-auto p-3 place-items-center text-center ">
        <ul>
          <li>
            <div className="flex flex-wrap justify-between">
              {Records.map((record) => {
                return (
                  <div
                    className="border max-w-[550px] max-h-[407px] mb-10"
                    key={record.id}
                  >
                    <Link href={"/[slug]"}>
                      <div className="mb-2">
                      <img
                        src={record.image}
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
                    <div className="text-start ml-4 mb-2 text-lg">
                      {record.type}
                    </div>
                    <div className="border-b pb-2 text-start mx-4 text-base mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                      {record.text}
                    </div>
                    <div className="text-end mr-4 text-sm mb-2">
                      {record.date}
                    </div>
                  </div>
                );
              })}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
