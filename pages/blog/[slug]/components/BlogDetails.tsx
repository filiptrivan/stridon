import React from "react";
import Records from "../../blogovi.json";

const BlogDetails = () => {
  return (
    <div>
      {Records.filter(
        (record) => record.title == "Introduction to JavaScript"
      ).map((record) => (
        <div>
          <div>
            <img
              src={record.image}
              alt=""
              className="w-full max-h-[400px] object-cover px-3"
            />
          </div>

          <div className="max-w-[760px] mx-auto">
            <div className="text-right px-3 py-2 mb-3">{record.date}</div>
            <div className="text-4xl mb-2 font-medium">{record.title}</div>
            <div>{record.type}</div>
            <div className="mt-10">{record.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
