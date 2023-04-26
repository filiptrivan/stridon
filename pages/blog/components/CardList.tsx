

import { useRouter } from "next/router";
import Records from "../blogovi.json";
import Link from "next/link";
import Card from "./Card";
import { useState } from "react";


const CardList = ({blogData}) => {

  return (
    <div>
      <div className="max-w-[1140px] mx-auto p-3 text-center ">
        <ul>
          <li>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {blogData.map((record, index) => {
                return (
                  <Card 
                  key={index}
                  title={record.title}
                  text={record.text}
                  date={record.date}
                  image={record.image}
                  type={record.type}
                  />
                );
              })}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardList;
