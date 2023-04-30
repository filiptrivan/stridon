import React from "react";

export interface BlogData {
  title: string;
  main_img: string;
  created_time: string;
  description: string;
  vrsta: {
    title: string;
  };
}

interface Props {
  blogData: BlogData[];
}

const BlogDetails: React.FC<Props> = ({ blogData }) => {
  return (
    <div>
      {blogData
      .
      filter(
        //record.index == index promeni kasnije
        (record) => record.title == "Bosch je najbolji"
      )
      .map((record) => (
        <div>
          <div>
            <img
              src={record.main_img}
              alt=""
              className="w-full max-h-[400px] object-cover px-3"
            />
          </div>

          <div className="max-w-[760px] mx-auto px-3 mb-20">
            <div className="text-right py-2 mb-3">{record.created_time}</div>
            <div className="text-4xl mb-2 font-medium">{record.title}</div>
            <div>{record.vrsta.title}</div>
            <div className="mt-10">{record.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
