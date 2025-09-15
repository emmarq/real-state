"use client";

import { setParam } from "@/utils";
import { RealStateFilter } from "@/utils/service";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  const [name, setName] = useState(searchParams.get("name") || "");
  const [address, setAddress] = useState(searchParams.get("address") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const timeout = useRef<NodeJS.Timeout | string | number>(0);

  const handleChangeFilter = (filter: RealStateFilter) => {
    const params = new URLSearchParams(searchParams);
    setParam(params, "name", filter.name);
    setParam(params, "address", filter.address);
    setParam(params, "minPrice", filter.minPrice?.toString());
    setParam(params, "maxPrice", filter.maxPrice?.toString());
    setParam(params, "pageNumber", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      const parsedPrices = {
        min: parseInt(minPrice),
        max: parseInt(maxPrice),
      };

      const _minPrice = isNaN(parsedPrices.min) ? undefined : parsedPrices.min;
      const _maxPrice = isNaN(parsedPrices.max) ? undefined : parsedPrices.max;

      handleChangeFilter({
        name,
        address,
        minPrice: _minPrice,
        maxPrice: _maxPrice,
      });
    }, 300);
    return () => {
      clearTimeout(timeout.current);
    };
  }, [name, address]);

  return (
    <div className="px-4">
      <TextInput defaultValue={name} label="Name" onChangeText={setName} />
      <TextInput
        defaultValue={address}
        label="Address"
        onChangeText={setAddress}
      />
    </div>
  );
};

export default Filter;
