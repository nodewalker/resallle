"use client";

import React from "react";
import { ItemCard } from "@/components/ItemCard";
import { Product, ProductRes } from "@/utils/type";
import { UseQueryResult } from "@tanstack/react-query";
import { ProductPaginationPanel } from "./ProductPaginationPanel";
import { ProductFilterPanel } from "./ProductFilterPanel";

export const ProductList: React.FC<{
  products: UseQueryResult<ProductRes, Error>;
  currPagination: [number, number];
  setCurrPagination: (value: [number, number]) => void;
  params: URLSearchParams;
}> = ({
  products,
  currPagination,
  setCurrPagination,
  params,
}): React.ReactElement => {
  return (
    <div className="w-full">
      <ProductFilterPanel params={params} />
      <div className="flex flex-wrap gap-x-5 gap-y-3">
        {products.isError && <div>{products.error.toString()}</div>}
        {products.isPending && <h1>PENDING</h1>}
        {products.data?.data &&
          products.data.data.map((p: Product) => {
            return <ItemCard key={p._uuid} product={p} />;
          })}
      </div>
      <ProductPaginationPanel
        pagination={products.data!.pagination}
        currPagination={currPagination}
        setCurrPagination={setCurrPagination}
      />
    </div>
  );
};
