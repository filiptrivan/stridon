import React from "react";
import Link from "next/link";
import { BlogCardType } from "..";
import DateFormater from "@/pages/components/DateFormater";
import ErrorPage from "@/pages/_error";
import Image from "next/image";

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
                <Image
                  priority
                  src={record.main_img}
                  alt=""
                  className="w-full max-h-[200px] object-cover"
                  width={1920}
                  height={1080}
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
