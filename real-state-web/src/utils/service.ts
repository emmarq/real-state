import { Configuration, RealStatesApi } from "@/api";

const config = new Configuration({ basePath: "http://localhost:5000" });
const realStateApi = new RealStatesApi(config);

const fetchRealStates = async () => {
  const data = await realStateApi.realStatesGet();

  return data;
};

const getRealState = async (id: string) => {
  const data = await realStateApi.realStatesGet2(id);

  return data;
};

export { fetchRealStates, getRealState };
