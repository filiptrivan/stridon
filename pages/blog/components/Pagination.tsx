import React from "react";
import ErrorPage from "@/pages/_error";
import _ from "lodash";

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

  const returnPaginationRange = (
    totalPage: number,
    currentPage: number,
    postsPerPage: number,
    siblings: number
  ): Array<number | string> => {
    if (totalPage <= 0) {
      return [];
    }
    let totalPageNoInArray = 7 + siblings;
    if (totalPageNoInArray >= totalPage) {
      return _.range(1, totalPage + 1);
    }
    let leftSiblingsIndex = Math.max(currentPage - siblings, 1);
    let rightSiblingsIndex = Math.min(currentPage + siblings, totalPage);
  
    let showLeftDots = leftSiblingsIndex > 2;
    let showRightDots = rightSiblingsIndex < totalPage - 2;
    if (!showLeftDots && showRightDots) {
      let leftItemsCount = 3 + 2 * siblings;
      let leftRange = _.range(1, leftItemsCount + 1);
      return [...leftRange, "...", totalPage];
    } else if (showLeftDots && !showRightDots) {
      let rightItemsCount = 3 + 2 * siblings;
      let rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
      return [1, "...", ...rightRange];
    } else {
      let middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
      return [1, "...", ...middleRange, "...", totalPage];
    }
  };

  let array = returnPaginationRange(
    totalPage,
    currentPage,
    postsPerPage,
    siblings
  );

  if (!array) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-[1140px] m-auto p-3 text-end">
        {/* {array && (      */}
        {Array.isArray(array) &&
          array.map((page, index) => {
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
