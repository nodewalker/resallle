import { GetProducts } from "@/lib/api";
import { Product, ProductRes } from "@/utils/type";
import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { TrendProductSkeletonList } from "./TrendProductSkeletonList";
import { ProductCard } from "@/components/Product";

export const TrendProductList = ({
  selectedTag,
}: {
  selectedTag: string | null;
}) => {
  const trendRes: UseSuspenseQueryResult<ProductRes, Error> = useSuspenseQuery({
    queryKey: ["product", "trend", selectedTag ? selectedTag : "shoes"],
    queryFn: async () => {
      const res: ProductRes = await GetProducts(
        `cn=${selectedTag ? selectedTag : "shoes"}&p=1&l=5`
      );
      return res;
    },
  });

  if (!trendRes.data.data || trendRes.data.data.length === 0) {
    return <TrendProductSkeletonList />;
  }

  return (
    <>
      {trendRes.data?.data.map((p: Product) => {
        return <ProductCard key={p._uuid} product={p} />;
      })}
    </>
  );
};
