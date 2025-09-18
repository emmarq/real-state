import { ChangeEvent, useCallback, useEffect, useState, useRef } from "react";
import clsx from "clsx/lite";
import styles from "./MultiRangeSlider.module.css";
import { currencyFormatter } from "@/utils";

export type SliderRange = { min?: number; max?: number };

interface MultiRangeSliderProps {
  min: number;
  max: number;
  defaultValue?: SliderRange;
  onChange: (value: SliderRange) => void;
}

const MultiRangeSlider = ({
  min,
  max,
  defaultValue,
  onChange,
}: MultiRangeSliderProps) => {
  const [minVal, setMinVal] = useState(defaultValue?.min || min);
  const [maxVal, setMaxVal] = useState(defaultValue?.max || max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    if (min === minVal && maxVal === max) return;
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal]);

  return (
    <div className={styles.container}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={clsx(
          styles.thumb,
          styles.thumb__z_3,
          minVal > max - 100 && styles.thumb__z_5,
        )}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className={clsx(styles.thumb, styles.thumb__z_4)}
      />

      <div className={styles.slider}>
        <div className={clsx(styles.slider__track, "bg-gray-700")}></div>
        <div
          ref={range}
          className={clsx(styles.slider__range, "bg-gray-400")}
        ></div>
        <div className={clsx(styles.slider__left_value, "text-foreground")}>
          {currencyFormatter.format(minVal)}
        </div>
        <div className={clsx(styles.slider__right_value, "text-foreground")}>
          {currencyFormatter.format(maxVal)}
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
