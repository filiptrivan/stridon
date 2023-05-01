import React from "react";
import returnPaginationRange from "../utils/appUtils";

interface Props {
  postsPerPage: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
  siblings: number;
  totalPage: number;
}

const Pagination: React.FC<Props> = ({
  postsPerPage,
  setCurrentPage,
  currentPage,
  siblings,
  totalPage,
}) => {
  let pages: number[] = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }

  const handleClick = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  let array = returnPaginationRange(totalPage, currentPage, postsPerPage, siblings);

  return (
    <div>
      <div className="max-w-[1140px] m-auto p-3 text-end">
        {array.map((page, index) => {
          if (page == "...") {
            return (
              <button
                className="p-2 px-4 mb-24 border cursor-default text-gray-500"
                key={index}
                disabled
              >
                {page}
              </button>
            );
          }
          return (
            <button
              className={
                page === currentPage
                  ? "p-2 px-4 mb-24 border-2 border-black hover:bg-slate-300"
                  : "p-2 px-4 mb-24 border hover:bg-slate-300"
              }
              key={index}
              onClick={() => handleClick(Number(page))}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;


