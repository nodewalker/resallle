"use client";

import { useCallback, useState } from "react";
import { TrendCategories } from "@/utils/const";
import { TrendCategoryType } from "@/utils/type";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const Trends = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [selectedTag, setSelect] = useState<string | null>(
    TrendCategories.filter(
      (el: TrendCategoryType) => el.tag === searchParams.get("t")
    ).length
      ? searchParams.get("t")
      : null
  );

  const newParams = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleTrendClick = (tag: string) => {
    if (selectedTag !== tag) {
      setSelect(tag);
      router.push(`${pathname}?${newParams("t", tag)}`, {
        scroll: false,
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="flex items-center justify-between">
        <div className="font-normal text-[30px] leading-[38px] tracking-[-1px]">
          {"В тренде"}
        </div>
        <div className="flex flex-row gap-3">
          {TrendCategories.map((el: TrendCategoryType) => {
            return (
              <div
                key={el.id}
                className={`${
                  selectedTag === el.tag ||
                  (selectedTag === null && el.id === 0)
                    ? "bg-[#121212] text-[#FFFFFF]"
                    : "bg-transparent text-[#121212]"
                } !py-[7px] !px-[20px] font-medium text-[14px] leading-[24px] tracking-[1px] border-[1px] border-[#dddddd] rounded-3xl cursor-pointer`}
                onClick={() => handleTrendClick(el.tag)}
              >
                {el.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="">
        <div className="">
          <div className=""></div>
          <div className=""></div>
        </div>
        <div className="">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};
