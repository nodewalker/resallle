"use client";

import { useCallback, useState } from "react";
import { Routes, TrendCategories } from "@/utils/const";
import { TrendCategoryType } from "@/utils/type";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ItemCard } from "./ItemCard";
import Link from "next/link";

export const Trends = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [selectedTag, setSelect] = useState<string | null>(
    TrendCategories.filter(
      (el: TrendCategoryType) => el.tag === searchParams.get("t")
    ).length
      ? searchParams.get("t")
      : TrendCategories[0].tag
  );

  const newParams: (name: string, value: string) => string = useCallback(
    (name: string, value: string): string => {
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
    <div className="container !mt-5">
      <div className="flex pb-4 items-center justify-between gap-8 overflow-x-scroll">
        <div className="min-w-[120px] font-normal text-[30px] leading-[38px] tracking-[-1px]">
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
                } shrink-0 !py-[7px] !px-[20px] font-medium text-[14px] leading-[24px] tracking-[1px] border-[1px] border-[#dddddd] rounded-3xl cursor-pointer`}
                onClick={() => handleTrendClick(el.tag)}
              >
                {el.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-6 flex flex-row justify-center gap-5 flex-wrap">
        <ItemCard
          href={`${Routes.item}/adidas-nike-pro-uid`}
          image={"/example.png"}
          name={"Adidas nike pro"}
          rating={4.5}
          price={1200}
          isSelected
        />{" "}
        <ItemCard
          href="/?lox"
          image={"/example.png"}
          name={"Adidas nike pro"}
          rating={2}
          price={1200}
          // isSelected
        />{" "}
        <ItemCard
          href="/?lox"
          image={"/example.png"}
          name={"Adidas nike pro"}
          rating={3.5}
          price={1200}
          // isSelected
        />{" "}
        <ItemCard
          href="/?lox"
          image={"/example.png"}
          name={"Adidas nike pro"}
          rating={4.5}
          price={1200}
          // isSelected
        />
      </div>
      <div className="block w-full py-5 text-center">
        <Link
          href={`${Routes.catalog.name}?${Routes.catalog.category}=${selectedTag}`}
          className="inline-block py-[7px] px-[25px] border-[1px] border-[#121212] rounded-4xl opacity-[80%]"
        >
          Show more
        </Link>
      </div>
    </div>
  );
};
