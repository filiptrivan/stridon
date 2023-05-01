import React from "react";
import Link from "next/link";
import { BlogCardType } from "..";
import DateFormater from "@/pages/components/DateFormater";
import ErrorPage from "@/pages/_error";

interface Props {
  record: BlogCardType;
}

const Card = ({ record }: Props) => {
  if (!record) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }
  return (
    <div className="border max-w-[550px] max-h-[407px] mb-10">
      {record.slug && (
        <div>
          <Link
            href={{
              pathname: "/blog/[slug]/",
              query: { slug: record.slug },
            }}
          >
            <div className="mb-2">
              {record.slug && (
                <img
                  src={record.main_img}
                  alt=""
                  className="w-full max-h-[200px] object-cover"
                />
              )}
            </div>
          </Link>
          <Link
            href={{
              pathname: "/blog/[slug]/",
              query: { slug: record.slug },
            }}
          >
            {record.title && (
              <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">
                {record.title}
              </div>
            )}
          </Link>
        </div>
      )}

      {record.vrsta.title && (
        <div className="text-start ml-4 mb-2 text-lg">{record.vrsta.title}</div>
      )}
      {record.description && (
        <div className="border-b pb-2 text-start mx-4 text-base mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {record.description}
        </div>
      )}
      {record.created_time && (
        <div className="text-end mr-4 text-sm mb-2">
          <DateFormater dateString={record.created_time} />
        </div>
      )}
    </div>
  );
};

export default Card;

// {blogData.main_img && (
//   <img
//     src={blogData.main_img}
//     alt=""
//     className="w-full max-h-[400px] object-cover px-3"
//   />
// )}
// </div>

// <div className="max-w-[760px] mx-auto px-3 mb-20">
// <div className="text-right py-2 mb-3">
//   {blogData.created_time && (
//     <DateFormater dateString={blogData.created_time} />
//   )}
// </div>
// {blogData.title && (
//   <div className="text-4xl mb-2 font-medium">{blogData.title}</div>
// )}
// {blogData.vrsta?.title && (
//   <div>{blogData.vrsta.title}</div>
// )}
// {blogData.description && (
//   <div className="mt-10">{blogData.description}</div>
// )}
