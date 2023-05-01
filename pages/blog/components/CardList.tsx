import React from "react";
import Card from "./Card";
import { BlogCardType } from "../index";
import { NextPage } from "next";
import ErrorPage from "@/pages/_error";

interface Props {
  blogData: BlogCardType[];
}

const CardList:NextPage<Props> = ({ blogData }) => {
  if (!blogData) {
    return <div><ErrorPage/></div>;
  }
  return (
    <div>
      <div className="max-w-[1140px] mx-auto p-3 text-center ">
        <ul>
          <li>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {blogData.map((record) => {
                return (
                  <Card
                    key={record.id}
                    record = {record}
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
