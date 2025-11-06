import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { motion } from "motion/react";
import { QueryType } from "@/utils/type";

export const PriceSlider = ({
  range,
  productsPriceRange,
  setRange,
  handleQuery,
}: {
  range: [number, number];
  productsPriceRange: [number, number];
  setRange: Dispatch<SetStateAction<[number, number]>>;
  handleQuery: (query: QueryType[]) => void;
}) => {
  const [tempPrice, setTempPrice] = useState<[string, string]>([
    range[0].toString(),
    range[1].toString(),
  ]);

  const onPriceChange = (
    e: React.FocusEvent<HTMLInputElement, Element>,
    type: "min" | "max"
  ) => {
    e.preventDefault();
    const num = Number(e.target.value);
    if (Number.isNaN(num)) {
      setTempPrice([range[0].toString(), range[1].toString()]);
    } else {
      if (type === "min") {
        if (num < 0) setRange([0, range[1]]);
        else if (num > range[1]) setRange([range[1], range[1]]);
        else setRange([num, range[1]]);
      } else {
        if (num > productsPriceRange[1])
          setRange([range[0], productsPriceRange[1]]);
        else if (num < range[0]) setRange([range[0], range[0]]);
        else setRange([range[0], num]);
      }
    }
  };

  useEffect(() => {
    setTempPrice([range[0].toString(), range[1].toString()]);
    handleQuery([
      { key: "pf", value: range[0].toString() },
      { key: "pt", value: range[1].toString() },
    ]);
  }, [range]);

  const removeZero = (val: string) => {
    let i;
    for (i = 0; i < val.length; i++) {
      if (val[i] !== "0") break;
    }
    if (i === val.length) return val;
    return val.slice(i);
  };

  return (
    <motion.div
      className="max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h3 className="text-[16px] font-semibold mb-4 text-gray-800">
        Цена:{range[0].toLocaleString()} ₽ – {range[1].toLocaleString()} ₽
        <div className="py-2 flex items-center justify-around gap-6 font-normal">
          <input
            type="string"
            className="w-[40%] border-[1px] border-black/20 py-[1px] px-2 rounded-2xl outline-0"
            value={tempPrice[0]}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                e.preventDefault();
                const input = e.target as HTMLInputElement;
                input.blur();
              }
            }}
            onBlur={(e) => onPriceChange(e, "min")}
            onChange={(e) =>
              setTempPrice([removeZero(e.target.value), range[1].toString()])
            }
          />
          <input
            type="string"
            className="w-[40%] border-[1px] border-black/20 py-[1px] px-2 rounded-2xl outline-0"
            value={tempPrice[1]}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                e.preventDefault();
                const input = e.target as HTMLInputElement;
                input.blur();
              }
            }}
            onBlur={(e) => onPriceChange(e, "max")}
            onChange={(e) =>
              setTempPrice([range[0].toString(), removeZero(e.target.value)])
            }
          />
        </div>
      </motion.h3>

      <div className="relative">
        <Slider
          range
          min={productsPriceRange[0]}
          max={productsPriceRange[1]}
          step={50}
          value={range}
          // TODO: onBlur
          onChange={(val) => {
            const num = val as [number, number];
            setRange(num);
          }}
          allowCross={false}
          handleStyle={[
            {
              height: 20,
              width: 20,
              marginTop: -8,
              backgroundColor: "#000000",
              border: "0",
              boxShadow: "none",
            },
            {
              height: 20,
              width: 20,
              marginTop: -8,
              backgroundColor: "#000000",
              border: "0",
              boxShadow: "none",
            },
          ]}
          railStyle={{
            backgroundColor: "#F0F0F0",
            height: 6,
          }}
        />

        <motion.div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[6px] rounded-full"
          initial={{ background: "linear-gradient(90deg,#d1d5db,#9ca3af)" }}
          animate={{
            background: [
              "linear-gradient(90deg,#d1d5db,#9ca3af)",
              "linear-gradient(90deg,#f3f4f6,#6b7280)",
              "linear-gradient(90deg,#d1d5db,#9ca3af)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            clipPath: `inset(0 ${100 - (range[1] / 10000) * 100}% 0 ${
              (range[0] / 10000) * 100
            }% round 3px)`,
            filter: "brightness(1.1) contrast(1.05)",
          }}
        />
      </div>
    </motion.div>
  );
};
