"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { Routes } from "@/utils/const";
import { CategorySelect } from "./CategorySelect";
import { TrendProductList } from "./TrendProductList";
import { TrendProductSkeletonList } from "./TrendProductSkeletonList";
import { CategorySkeletonList } from "./CategorySkeleton";

export const Trends = (): React.ReactElement => {
  const [isTagLoading, setTagLoading] = useState<boolean>(false);
  const [selectedTag, setSelect] = useState<string | null>(null);

  return (
    <div className="container !mt-5">
      <div className="flex pb-4 items-center justify-between gap-8 overflow-x-scroll">
        <div className="min-w-[120px] font-normal text-[30px] leading-[38px] tracking-[-1px]">
          {"В тренде"}
        </div>
        <div className="flex flex-row gap-3">
          <Suspense fallback={<CategorySkeletonList />}>
            <CategorySelect
              selectedTag={selectedTag}
              setSelect={setSelect}
              isLoading={isTagLoading}
              setLoading={setTagLoading}
            />
          </Suspense>
        </div>
      </div>
      <div className="mt-6 pb-5 flex flex-row gap-5 overflow-x-scroll">
        <Suspense fallback={<TrendProductSkeletonList />}>
          <TrendProductList selectedTag={selectedTag} />
        </Suspense>
      </div>
      <div className="block w-full py-5 text-center">
        <Link
          href={`${Routes.catalog.name}?${Routes.catalog.category}=${selectedTag}`}
          className="inline-block py-[7px] px-[25px] border-[1px] border-[#121212] rounded-4xl opacity-[80%] hover:bg-[#121212] hover:text-white transition-colors ease-in duration-150"
        >
          Show more
        </Link>
      </div>
    </div>
  );
};
