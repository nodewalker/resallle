"use client";

import { faAngleUp, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PriceSlider } from "./PriceSlider";
import { useQuery } from "@tanstack/react-query";
import { GetCategories } from "@/lib/api";
import { CategoryTree } from "./Categories";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { QueryType } from "@/utils/type";

export const Filter = (): React.ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );

  // PRICE
  const [isPriceOpen, setPriceOpen] = useState<boolean>(
    params.get("pf") || params.get("pt") ? true : false
  );
  const [productsPriceRange, setProductsPriceRange] = useState<
    [number, number]
  >([0, 10000]);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    Number(params.get("pf")) || productsPriceRange[0],
    Number(params.get("pt")) || productsPriceRange[1],
  ]);
  const handlePriceOpen = () => {
    if (isPriceOpen) {
      params.delete("pt");
      params.delete("pf");
      router.push(pathname + "?" + params, { scroll: false });
    }
    setPriceOpen(() => !isPriceOpen);
  };

  // CATEGORY
  const [cid, setCid] = useState<string | null>(params.get("cid"));
  const { isPending, isError, data, error } = useQuery({
    queryFn: GetCategories,
    queryKey: ["category"],
  });

  // QUERY
  const createQueryString = useCallback(
    (name: string, value: string) => {
      params.set(name, value);
      return params.toString();
    },
    [params]
  );
  const handleQuery = (query: QueryType[]) => {
    let q = "";
    query.forEach((el) => (q = createQueryString(el.key, el.value)));
    router.push(pathname + "?" + q, {
      scroll: false,
    });
  };

  // RESET
  const handleResetFilter = () => {
    setPriceOpen(false);
    setPriceRange(() => productsPriceRange);
    setCid(null);
    router.push(pathname);
  };

  return (
    <div className="w-[300px] border-2 border-black/10 rounded-2xl px-[24px] py-[20px]">
      <div className="flex justify-between items-center border-b-[1px] border-black/10 pb-[20px]">
        <div className="font-bold text-[20px]">{"Фильтр"}</div>
        <FontAwesomeIcon
          icon={faSliders}
          size="lg"
          className="cursor-pointer"
        />
      </div>

      <div className="flex justify-between items-center border-b-[1px] border-black/10 py-[20px]">
        <AnimatePresence>
          {isPending && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              Pending
            </motion.div>
          )}
          {isError && <div>Error: {error.toString()}</div>}
          {data && (
            <CategoryTree
              data={data}
              handleQuery={handleQuery}
              cid={cid}
              setCid={setCid}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="border-b-[1px] border-black/10 py-[20px]">
        <motion.div
          className="flex justify-between items-center cursor-pointer"
          onClick={handlePriceOpen}
        >
          <div className="font-bold text-[20px]">{"Цена"}</div>
          <motion.span
            animate={{ rotate: isPriceOpen ? 0 : 180 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon
              icon={faAngleUp}
              size="lg"
              className={`cursor-pointer`}
            />
          </motion.span>
        </motion.div>
        <AnimatePresence>
          {isPriceOpen && (
            <motion.div
              className="mt-5"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{
                duration: 0.3,
              }}
            >
              <PriceSlider
                range={priceRange}
                setRange={setPriceRange}
                productsPriceRange={productsPriceRange}
                handleQuery={handleQuery}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        className="w-full bg-black rounded-3xl py-3 text-white text-[14px] cursor-pointer"
        onClick={handleResetFilter}
      >
        Сбросить
      </button>
    </div>
  );
};
