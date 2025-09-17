"use client";
import { setParam } from "@/utils";
import { Sort as ISort } from "@/utils/service";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import OrderDescIcon from "../Icons/OrderDesc";
import OrderAscIcon from "../Icons/OrderAsc";

const Sort = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const sortBy = searchParams.get("sortBy") || "";
  const sortDirection =
    (searchParams.get("sortDirection") as ISort["sortDirection"]) || "asc";

  const handleChangeSort = (sort: ISort) => {
    const params = new URLSearchParams(searchParams);
    setParam(
      params,
      "sortBy",
      sort.sortBy === "clean" ? undefined : sort.sortBy,
    );
    setParam(
      params,
      "sortDirection",
      sort.sortBy === "clean" ? undefined : sort.sortDirection,
    );
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="px-4 mt-8 flex justify-end">
      <label className="pr-4">Sort by</label>
      <select
        defaultValue={sortBy}
        onChange={(evt) => {
          handleChangeSort({ sortDirection, sortBy: evt.target.value });
        }}
      >
        <option value="clean">None</option>
        <option value="Name">Name</option>
        <option value="Address">Address</option>
        <option value="Price">Price</option>
      </select>
      <div
        className="pl-4 cursor-pointer"
        onClick={() => {
          handleChangeSort({
            sortDirection: sortDirection === "asc" ? "desc" : "asc",
            sortBy,
          });
        }}
      >
        {sortDirection === "desc" ? (
          <OrderDescIcon width={20} />
        ) : (
          <OrderAscIcon width={20} />
        )}
      </div>
    </div>
  );
};

export default Sort;
