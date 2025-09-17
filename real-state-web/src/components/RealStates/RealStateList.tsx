import { fetchRealStates, FetchRealStatesParams } from "@/utils/service";
import Pagination from "../Pagination";
import Image from "next/image";
import Link from "next/link";

type Props = FetchRealStatesParams;

const RealStateList = async ({ filter, sort, pagination }: Props) => {
  const response = await fetchRealStates({ filter, sort, pagination });

  return (
    <div>
      <ul>
        {response.data.Items?.map((realState) => {
          return (
            <li
              className="w-full h-60 relative my-8 flex items-end justify-end border-b-foreground border-b-1"
              key={realState.Id}
            >
              <Link href={`/real-states/${realState.Id}`}>
                <div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent to-background"></div>
                <Image
                  className="z-0"
                  src={realState.Image!}
                  fill
                  objectFit="cover"
                  alt={`Image of ${realState.Name}`}
                />
                <div className="z-20 relative text-2xl p-4 text-end">
                  {realState.Name}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Pagination
        currentPage={response.data.PageNumber || 1}
        nextPage={response.data.HasNext}
        prevPage={response.data.HasPrevious}
      />
    </div>
  );
};

export default RealStateList;
