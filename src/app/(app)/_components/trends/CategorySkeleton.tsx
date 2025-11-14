import { SkeletonGradient } from "@/components/SkeletonGradient";

export const CategorySkeleton = () => {
  return (
    <div
      className={`relative shrink-0 !py-[7px] !px-[20px] font-medium border-[1px] border-[#dddddd] rounded-3xl overflow-hidden`}
    >
      {"name"}
      <SkeletonGradient />
    </div>
  );
};

export const CategorySkeletonList = () => {
  return (
    <>
      {Array(3)
        .fill(0)
        .map((el, i) => {
          return <CategorySkeleton key={i} />;
        })}
    </>
  );
};
