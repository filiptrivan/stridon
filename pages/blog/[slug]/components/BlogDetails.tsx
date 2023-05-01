import { NextPage } from "next";
import React from "react";
import { BlogCardType } from "../..";
import DateFormater from "@/pages/components/DateFormater";

interface Props {
  blogData: BlogCardType
}

const BlogDetails:NextPage<Props> = ({ blogData }) => {
  return (
    <div>
        <div>
          <div>
            <img
              src={blogData.main_img}
              alt=""
              className="w-full max-h-[400px] object-cover px-3"
            />
          </div>

          <div className="max-w-[760px] mx-auto px-3 mb-20">
            <div className="text-right py-2 mb-3"><DateFormater dateString={blogData.created_time} /></div>
            <div className="text-4xl mb-2 font-medium">{blogData.title}</div>
            <div>{blogData.vrsta.title}</div>
            <div className="mt-10">{blogData.description}</div>
          </div>
        </div>
    </div>
  );
};

export default BlogDetails;
