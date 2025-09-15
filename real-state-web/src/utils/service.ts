import { Configuration, RealStatesApi } from "@/api";

const config = new Configuration({ basePath: "http://localhost:5000" });
const realStateApi = new RealStatesApi(config);

export type IPagination = {
  pageNumber?: number;
  pageSize?: number;
};
export type Sort = {
  sortBy?: string;
  sortDirection?: "asc" | "desc";
};
export type RealStateFilter = {
  name?: string;
  address?: string;
  minPrice?: number;
  maxPrice?: number;
};

export type FetchRealStatesParams = {
  filter?: RealStateFilter;
  sort?: Sort;
  pagination?: IPagination;
};

const fetchRealStates = async ({
  filter,
  pagination,
  sort,
}: FetchRealStatesParams) => {
  const data = await realStateApi.realStatesGet(
    pagination?.pageNumber,
    pagination?.pageSize,
    sort?.sortBy,
    sort?.sortDirection === "desc",
    filter?.name,
    filter?.address,
    filter?.minPrice,
    filter?.maxPrice,
  );

  return data;
};

const getRealState = async (id: string) => {
  const data = await realStateApi.realStatesGet2(id);

  return data;
};

export { fetchRealStates, getRealState };
