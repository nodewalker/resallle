import { SkeletonGradient } from "../SkeletonGradient";

export const ProductSkeleton = (): React.ReactElement => {
  return (
    <div className="w-[295px] h-[410px]">
      <div className="w-[295px] h-[300px] relative rounded-3xl overflow-hidden">
        <SkeletonGradient />
      </div>
      <div className="py-[10px] w-[295px] flex flex-col justify-between gap-1">
        <div className="relative w-full h-full overflow-x-hidden overflow-hidden">
          <SkeletonGradient />.
        </div>
        <div className="relative overflow-hidden">
          <SkeletonGradient />.
        </div>
        <div className="relative overflow-hidden ">
          <SkeletonGradient />.
        </div>
      </div>
    </div>
  );
};
