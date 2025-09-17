"use client";

import { parseNumber, setParam } from "@/utils";
import { RealStateFilter } from "@/utils/service";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useRef, useState } from "react";

type TextInputProps = {
  defaultValue: string;
  label: string;
  onChangeText: (value: string) => void;
};

const TextInput = ({ defaultValue, label, onChangeText }: TextInputProps) => {
  return (
    <div className="py-1 flex align-bottom items-end">
      <label className="w-20 inline-block flex-none">{label}</label>
      <div className="border-b-1 border-amber-50 flex-1">
        <input
          className="w-full"
          defaultValue={defaultValue}
          type="text"
          onChange={(evt) => {
            onChangeText(evt.target.value);
          }}
        />
      </div>
    </div>
  );
};

const Filter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const defaultName = searchParams.get("name") || "";
  const defaultAddress = searchParams.get("address") || "";
  const defaultMinPrice = searchParams.get("minPrice");
  const defaultMaxPrice = searchParams.get("maxPrice");

  const [filter, setFilter] = useState<RealStateFilter>({
    name: defaultName,
    address: defaultAddress,
    minPrice: parseNumber(defaultMinPrice),
    maxPrice: parseNumber(defaultMaxPrice),
  });
  const timeout = useRef<NodeJS.Timeout | string | number>(0);

  const handleChangeFilter = (filter: RealStateFilter) => {
    setFilter(filter);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      setParam(params, "name", filter.name);
      setParam(params, "address", filter.address);
      setParam(params, "minPrice", filter.minPrice?.toString());
      setParam(params, "maxPrice", filter.maxPrice?.toString());
      setParam(params, "pageNumber", "1");
      replace(`${pathname}?${params.toString()}`);
    }, 300);
  };

  return (
    <div className="px-4">
      <TextInput
        defaultValue={defaultName}
        label="Name"
        onChangeText={(name) => {
          handleChangeFilter({ ...filter, name });
        }}
      />
      <TextInput
        defaultValue={defaultAddress}
        label="Address"
        onChangeText={(address) => {
          handleChangeFilter({ ...filter, address });
        }}
      />
    </div>
  );
};

export default Filter;
