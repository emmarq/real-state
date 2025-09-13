import RealStates from "@/components/RealStates";
import { fetchRealStates } from "@/utils/service";

export default async function RealStatePage() {
  const response = await fetchRealStates();
  return <RealStates data={response.data} />;
}
