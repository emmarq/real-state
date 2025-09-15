import Filter from "./Filter";
import { Suspense } from "react";
import RealStateList from "./RealStateList";
import { IPagination, RealStateFilter, Sort } from "@/utils/service";

export type Props = {
  searchParams: Promise<RealStateFilter & IPagination & Sort>;
};

const RealStates = async (props: Props) => {
  const searchParams = await props.searchParams;

  const filter: RealStateFilter = {
    name: searchParams?.name,
    address: searchParams?.address,
    minPrice: searchParams?.minPrice,
    maxPrice: searchParams?.maxPrice,
  };
  const pagination: IPagination = {
    pageNumber: searchParams.pageNumber,
    pageSize: searchParams.pageSize,
  };
  const sort: Sort = {
    sortBy: searchParams.sortBy,
    sortDirection: searchParams.sortDirection,
  };

  return (
    <div className="">
      <main className="">
        <h1 className="px-4 text-3xl py-4 font-bold">Real states</h1>
        <p className="px-4 text-lg">Filters</p>
        <Filter />
        <Suspense key={JSON.stringify(searchParams)}>
          <RealStateList filter={filter} sort={sort} pagination={pagination} />
        </Suspense>
      </main>
      <footer className=""></footer>
    </div>
  );
};

export default RealStates;
