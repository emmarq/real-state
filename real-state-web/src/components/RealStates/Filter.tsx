"use client";

import { parseNumber, setParam } from "@/utils";
import { fetchPriceRange, RealStateFilter } from "@/utils/service";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Suspense, use, useEffect, useRef, useState } from "react";
import DualRangeSlider from "../MultiRangeSlider";
import { SliderRange } from "@/components/MultiRangeSlider/MultiRangeSlider";
import { RealStatePriceRange } from "@/api";

type TextInputProps = {
  defaultValue: string;
  label: string;
  onChangeText: (value: string) => void;
};

const TextInput = ({ defaultValue, label, onChangeText }: TextInputProps) => {
  return (
    <div className="py-1 flex align-bottom items-end">
      <label className="w-24 inline-block flex-none">{label}</label>
      <div className="border-b-1 border-gray-400 flex-1">
        <input
          placeholder={label}
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

const PriceRange = ({
  defaultValue,
  onChange,
}: {
  defaultValue: SliderRange;
  onChange: (range: SliderRange) => void;
}) => {
  const [range, setRange] = useState<RealStatePriceRange>();
  useEffect(() => {
    fetchPriceRange().then((response) => {
      setRange(response.data);
    });
  }, []);

  if (!range?.MinPrice || !range.MaxPrice) return null;

  return (
    <div className="py-2 flex items-center">
      <label className="w-24">Price range</label>
      <div className="relative flex-1">
        <DualRangeSlider
          max={range.MaxPrice}
          min={range.MinPrice}
          defaultValue={defaultValue}
          onChange={onChange}
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
      <Suspense>
        <PriceRange
          defaultValue={{ min: filter.minPrice, max: filter.maxPrice }}
          onChange={({ min, max }) => {
            handleChangeFilter({ ...filter, minPrice: min, maxPrice: max });
          }}
        />
      </Suspense>
    </div>
  );
};

export default Filter;
