import { TrendCategories } from "@/utils/const";
import { TrendCategoryType } from "@/utils/type";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useCallback, useEffect } from "react";

export const CategorySelect = ({
  selectedTag,
  setSelect,
  isLoading,
  setLoading,
}: {
  selectedTag: string | null;
  setSelect: Dispatch<SetStateAction<string | null>>;
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleTrendClick = (tag: string) => {
    if (selectedTag !== tag) {
      setSelect(tag);
      router.push(`${pathname}?${newParams("t", tag)}`, {
        scroll: false,
      });
    }
  };

  const newParams: (name: string, value: string) => string = useCallback(
    (name: string, value: string): string => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    setSelect(
      TrendCategories.filter(
        (el: TrendCategoryType) => el.tag === searchParams.get("t")
      ).length
        ? searchParams.get("t")
        : TrendCategories[0].tag
    );
    setLoading(true);
  }, []);

  return (
    <>
      {TrendCategories.map((el: TrendCategoryType) => {
        return (
          <div
            key={el.id}
            className={`${
              isLoading &&
              (selectedTag === el.tag || (selectedTag === null && el.id === 0))
                ? "bg-[#121212] text-[#FFFFFF]"
                : "bg-transparent text-[#121212]"
            } shrink-0 !py-[7px] !px-[20px] font-medium text-[14px] leading-[24px] tracking-[1px] border-[1px] border-[#dddddd] rounded-3xl cursor-pointer`}
            onClick={() => handleTrendClick(el.tag)}
          >
            {el.name}
          </div>
        );
      })}
    </>
  );
};
