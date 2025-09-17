import { currencyFormatter } from "@/utils";
import { fetchRealState } from "@/utils/service";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import LeftArrowIcon from "../Icons/LeftArrow";

export type Props = {
  params: Promise<{ id: string }>;
};
const RealStateDetail = async (props: Props) => {
  const params = await props.params;
  return (
    <div className="">
      <main className="">
        <Link className="flex gap-2" href={"/real-states"}>
          <LeftArrowIcon width={20} /> Go to real states
        </Link>
        <Suspense>
          <RealState id={params.id} />
        </Suspense>
      </main>
      <footer className="p-4"></footer>
    </div>
  );
};

const RealState = async ({ id }: { id: string }) => {
  const response = await fetchRealState(id);
  const realState = response.data;
  return (
    <div>
      <div className="h-80 relative">
        <div className="absolute z-10 inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        <Image
          src={realState.Image || ""}
          fill
          alt={`Image of ${realState.Image}`}
          objectFit="cover"
        />
      </div>
      <h1 className="text-4xl font-bold p-4">{realState.Name}</h1>
      <div className="flex items-center px-4">
        <div className="rounded-full overflow-hidden bg-foreground">
          <Image
            alt={`Photo of owner ${realState.Owner?.Name}`}
            src={realState.Owner?.Photo || ""}
            objectFit="contain"
            width={50}
            height={50}
            unoptimized
          />
        </div>
        <span className="pl-4">{realState.Owner?.Name}</span>
      </div>
      <dl className="p-4 grid grid-cols-[auto_1fr] gap-x-2">
        <dt className="font-bold">Price</dt>
        <dd>{currencyFormatter.format(realState.Price!)}</dd>
        <dt className="font-bold">Address</dt>
        <dd>{realState.Address}</dd>
        <dt className="font-bold">Year</dt>
        <dd>{realState.Year}</dd>
      </dl>

      <h2 className="text-xl px-4">Trace</h2>
      <div className="overflow-x-auto w-full">
        <table className="mx-4 table-auto border-collapse">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="p-3 text-left border border-gray-300 font-semibold">
                Name
              </th>
              <th className="p-3 text-left border border-gray-300 font-semibold">
                Date of Sale
              </th>
              <th className="p-3 text-left border border-gray-300 font-semibold">
                Tax
              </th>
              <th className="p-3 text-left border border-gray-300 font-semibold">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {realState.Trace?.map((t, index) => {
              return (
                <tr key={`${index}`}>
                  <td className="text-nowrap p-2">{t.Name}</td>
                  <td className="text-nowrap p-2">
                    {t.DateSale ? new Date(t.DateSale).toLocaleString() : ""}
                  </td>
                  <td className="text-nowrap p-2">{t.Tax}</td>
                  <td className="text-nowrap p-2">{t.Value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RealStateDetail;
