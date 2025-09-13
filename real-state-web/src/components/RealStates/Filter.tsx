"use client";

import { useEffect, useRef, useState } from "react";

type TextInputProps = {
  defaultValue: string;
  label: string;
  onChangeText: (value: string) => void;
};

const TextInput = ({ defaultValue, label, onChangeText }: TextInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        defaultValue={defaultValue}
        type="text"
        onChange={(evt) => {
          onChangeText(evt.target.value);
        }}
      />
    </div>
  );
};

export type FilterData = {
  name?: string;
  address?: string;
  minPrice?: number;
  maxPrice?: number;
};

type FilterProps = {
  filter: FilterData;
  onChangeFilter: (value: FilterData) => void;
};

const Filter = ({ filter, onChangeFilter }: FilterProps) => {
  const [name, setName] = useState(filter.name || "");
  const [address, setAddress] = useState(filter.address || "");
  const timeout = useRef<NodeJS.Timeout | string | number>(0);

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      onChangeFilter({
        name,
        address,
        minPrice: 0,
        maxPrice: 0,
      });
    }, 300);
    return () => {
      clearTimeout(timeout.current);
    };
  }, [name, address]);

  return (
    <div>
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
