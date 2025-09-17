"use client";
import { setParam } from "@/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import LeftArrowIcon from "../Icons/LeftArrow";
import RightArrowIcon from "../Icons/RigthArrow";

type Props = { currentPage: number; nextPage?: boolean; prevPage?: boolean };

const Pagination = ({ currentPage, prevPage, nextPage }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);
  setParam(params, "pageNumber", prevPage ? `${currentPage - 1}` : undefined);
  const prevLink = `${pathname}?${params.toString()}`;

  setParam(params, "pageNumber", nextPage ? `${currentPage + 1}` : undefined);
  const nextLink = `${pathname}?${params.toString()}`;

  return (
    <ul className="flex justify-center gap-3 pb-4">
      <li>
        {prevPage ? (
          <Link href={prevLink}>
            <div className="flex">
              <LeftArrowIcon width={20} />
              <span>Previous</span>
            </div>
          </Link>
        ) : (
          <div className="flex">
            <LeftArrowIcon width={20} className="text-gray-500" />
            <span className="cursor-not-allowed text-gray-500">Previous</span>
          </div>
        )}
      </li>
      <li>
        {nextPage ? (
          <Link href={nextLink}>
            <div className="flex">
              <span>Next</span>
              <RightArrowIcon width={20} />
            </div>
          </Link>
        ) : (
          <div className="flex">
            <span className="cursor-not-allowed text-gray-500">Next</span>
            <RightArrowIcon width={20} className="text-gray-500" />
          </div>
        )}
      </li>
    </ul>
  );
};

export default Pagination;
