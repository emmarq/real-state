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
    <ul>
      {prevPage && (
        <li>
          <Link href={prevLink}>Previous</Link>{" "}
        </li>
      )}
      {nextPage && (
        <li>
          <Link href={nextLink}>Next</Link>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
