import React from "react";
import Card from "./Card";

interface Props {
  blogData: {
    title: string;
    id: number;
    description: string;
    created_time: string;
    main_img: string;
    vrsta: {
      title: string;
    };
  }[];
}

const CardList: React.FC<Props> = ({ blogData }) => {
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
                    title={record.title}
                    text={record.description}
                    date={record.created_time}
                    image={record.main_img}
                    vrsta={record.vrsta}
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
