"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Filter, ProductList } from "./_components";
import { GetCategories, GetProducts } from "@/lib/api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Category, ProductRes, QueryType } from "@/utils/type";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Catalog() {
  // URL
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = useStableQueryKey(searchParams);
  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );
  const [pagination, setPagination] = useState<[number, number]>([
    Number(params.get("p")) || 1,
    Number(params.get("l")) || 10,
  ]); // [page, limit]
  const handlePagination = useCallback((value: [number, number]) => {
    setPagination(value);
  }, []);
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
  useEffect(() => {
    handleQuery([
      { key: "p", value: pagination[0].toString() },
      { key: "l", value: pagination[1].toString() },
    ]);
  }, [pagination]);

  // FILTER
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false);

  // CATEGORIES
  const categoriesRes: UseQueryResult<Category[], Error> = useQuery({
    queryFn: GetCategories,
    queryKey: ["category"],
  });

  // PRODUCTS
  const productRes: UseQueryResult<ProductRes, Error> = useQuery({
    queryKey: ["product", query],
    queryFn: () => GetProducts(query),
  });

  // PRICE
  const [productsPriceRange, setProductsPriceRange] = useState<
    [number, number]
  >([0, 10000]);

  return (
    <div className="container !pb-[20px] flex gap-5">
      <Filter
        productsPriceRange={productsPriceRange}
        categoryRes={categoriesRes}
        params={params}
        pathname={pathname}
        handleQuery={handleQuery}
      />
      {productRes.isPending && <div>Pending</div>}
      {!productRes.isPending && (
        <ProductList
          products={productRes}
          currPagination={pagination}
          setCurrPagination={handlePagination}
          params={params}
        />
      )}
    </div>
  );
}

const useStableQueryKey = (searchParams: URLSearchParams) => {
  return useMemo(() => {
    const params = Array.from(searchParams.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `${k}=${v}`)
      .join("&");
    return params;
  }, [searchParams]);
};
