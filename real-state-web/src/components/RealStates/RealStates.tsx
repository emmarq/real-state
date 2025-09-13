import { PagedResultOfRealState } from "@/api";
import Filter, { FilterData } from "./Filter";
import { useSearchParams } from "next/navigation";

type Props = {
  data: PagedResultOfRealState;
};

const setParam = (params: URLSearchParams, name: string, value?: string) => {
  if (value) params.set(name, value);
  else params.delete(name);
};

const RealStates = async ({ data }: Props) => {
  const searchParams = useSearchParams();

  const filter: FilterData = {
    name: searchParams.get("name")?.toString(),
    address: searchParams.get("address")?.toString(),
  };

  const handleChangeFilter = (filter: FilterData) => {
    const params = new URLSearchParams(searchParams);
    setParam(params, "name", filter.name);
    setParam(params, "address", filter.address);
    setParam(params, "minPrice", filter.minPrice?.toString());
    setParam(params, "maxPrice", filter.maxPrice?.toString());
  };

  return (
    <div>
      <h1>Real states</h1>
      <p>Filters</p>
      <Filter filter={filter} onChangeFilter={handleChangeFilter} />
      <ul>
        {data.Items?.map((realState) => {
          return (
            <li key={realState.Id}>
              <div>{realState.Name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RealStates;
