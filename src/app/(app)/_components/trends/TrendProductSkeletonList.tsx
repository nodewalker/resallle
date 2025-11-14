import { ProductSkeleton } from "@/components/Product";

export const TrendProductSkeletonList = () => {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((el, i) => {
          return <ProductSkeleton key={i} />;
        })}
    </>
  );
};
