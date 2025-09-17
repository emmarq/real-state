"use client";
import { setParam } from "@/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

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
    <ul className="flex justify-center gap-3">
      <li>
        {prevPage ? (
          <Link href={prevLink}>Previous</Link>
        ) : (
          <span className="cursor-not-allowed text-gray-500">Previous</span>
        )}
      </li>
      <li>
        {nextPage ? (
          <Link href={nextLink}>Next</Link>
        ) : (
          <span className="cursor-not-allowed text-gray-500">Next</span>
        )}
      </li>
    </ul>
  );
};

export default Pagination;
