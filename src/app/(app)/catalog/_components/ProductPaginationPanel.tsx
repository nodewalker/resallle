import React from "react";
import { Pagination } from "@/utils/type";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const pp = ({
  pagination,
  currPagination,
  setCurrPagination,
}: {
  pagination: Pagination;
  currPagination: [number, number];
  setCurrPagination: (value: [number, number]) => void;
}) => {
  const pages: (number | "...")[] = getPageNumbers(
    currPagination[0],
    pagination.totalPages as number
  );

  const handlePageClick = (
    type: "number" | "left" | "right",
    value?: number
  ) => {
    if (type === "left" && currPagination[0] > 1)
      setCurrPagination([currPagination[0] - 1, currPagination[1]]);
    else if (type === "right" && currPagination[0] < pagination?.totalPages)
      setCurrPagination([currPagination[0] + 1, currPagination[1]]);
    else if (type === "number" && value && currPagination[0] !== value)
      setCurrPagination([value, currPagination[1]]);
  };

  return (
    <div className="w-full flex items-center justify-center gap-4 flex-wrap">
      <FontAwesomeIcon
        icon={faAngleLeft}
        size="lg"
        className={`cursor-pointer`}
        onClick={() => handlePageClick("left")}
      />
      {pages.map((n, i) => {
        if (n === "...")
          return (
            <span key={n + i} className="">
              {n}
            </span>
          );
        else
          return (
            <button
              key={n + i}
              className={`w-[40px] h-[40px] rounded-lg cursor-pointer ${
                n === currPagination[0]
                  ? "text-black bg-black/5"
                  : "text-black/50 bg-transparent"
              } transition-all duration-500`}
              onClick={() => handlePageClick("number", n)}
            >
              {n}
            </button>
          );
      })}
      <FontAwesomeIcon
        icon={faAngleRight}
        size="lg"
        className={`cursor-pointer`}
        onClick={() => handlePageClick("right")}
      />
    </div>
  );
};

export const ProductPaginationPanel = React.memo(pp);

function getPageNumbers(
  current: number,
  total: number,
  delta = 2
): (number | "...")[] {
  const pages: (number | "...")[] = [];
  const range: number[] = [];

  for (
    let i = Math.max(2, current - delta);
    i <= Math.min(total, current + delta);
    i++
  ) {
    range.push(i);
  }

  if (current - delta > 2) {
    pages.push(1, "...");
  } else {
    for (let i = 1; i < Math.max(2, current - delta); i++) pages.push(i);
  }

  pages.push(...range);

  if (current + delta < total - 1) {
    pages.push("...", total);
  } else {
    for (let i = current + delta + 1; i <= total; i++) pages.push(i);
  }

  return pages;
}
