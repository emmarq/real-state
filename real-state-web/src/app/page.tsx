import RealStates from "@/components/RealStates";
import { fetchRealStates } from "@/utils/service";

export default async function Home() {
  const response = await fetchRealStates();
  return (
    <div className="">
      <main className="">
        <RealStates data={response.data} />
      </main>
      <footer className=""></footer>
    </div>
  );
}
