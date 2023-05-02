import { NextPage } from "next";
import React from "react";
import { BlogCardType } from "../..";
import DateFormater from "@/pages/components/DateFormater";
import ErrorPage from "@/pages/_error";
import Image from "next/image";

interface Props {
  blogData: BlogCardType;
}

const BlogDetails: NextPage<Props> = ({ blogData }) => {
  if (!blogData) {
    return <div><ErrorPage/></div>;
  }

  return (
    <div>
      <div>
        <div>
          {blogData.main_img && (
            <Image
              src={blogData.main_img}
              alt=""
              className="w-full max-h-[400px] object-cover px-3"
              width={1920}
              height={1080}
            />
          )}
        </div>

        <div className="max-w-[760px] mx-auto px-3 mb-20">
          <div className="text-right py-2 mb-3">
            {blogData.created_time && (
              <DateFormater dateString={blogData.created_time} />
            )}
          </div>
          {blogData.title && (
            <div className="text-4xl mb-2 font-medium">{blogData.title}</div>
          )}
          {blogData.vrsta?.title && (
            <div>{blogData.vrsta.title}</div>
          )}
          {blogData.description && (
            <div className="mt-10">{blogData.description}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
