import Link from "next/link";
import { footerPopularCategories, Routes } from "../utils/const";
import { FooterPopularCategoryType } from "../utils/type";

export const Footer = () => {
  return (
    <div className="w-full bg-[#121212]">
      <div className="container flex lg:flex-row flex-col gap-10 items-center justify-between !py-[40px] lg:!py-[60px] text-white font-medium">
        <div className="flex flex-col lg:items-start items-center gap-5">
          <div className="font-extrabold text-[24px] leading-[30px]">
            RESALLLE
          </div>
          <div className="max-w-[300px] lg:text-left text-center font-normal text-[14px] leading-[22px] opacity-[52%]">
            {
              "Resallle is a case for a personal portfolio of a UX/UI Designer; Telegram -  @talkingtogodd."
            }
          </div>
          {/* !TODO: INPUT */}
          {/* <div className="">
            <input type="text" className="" />
          </div> */}
        </div>
        <div className="flex gap-20 items-start flex-wrap">
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-[14px] leading-[16px]">
              {"ПОПУЛЯРНОЕ"}
            </div>
            {footerPopularCategories.map((el: FooterPopularCategoryType) => {
              return (
                <Link
                  key={el.id}
                  href={`${Routes.catalog}?t=${el.t}`}
                  className="font-medium opacity-[52%] text-[13px] leading-[16px]"
                >
                  {el.name}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-[14px] leading-[16px]">
              {"МЕНЮ"}
            </div>
            {/* TODO: open modal win fith categories */}
            <Link
              href={`/catalog`}
              className="font-medium opacity-[52%] text-[13px] leading-[16px]"
            >
              {"Все категории"}
            </Link>
            <Link
              href={Routes.gifts}
              className="font-medium opacity-[52%] text-[13px] leading-[16px]"
            >
              {"Подарочные карты"}
            </Link>
            {/* <Link
              href={`/blog`}
              className="font-medium opacity-[52%] text-[13px] leading-[16px]"
            >
              {"Блог"}
            </Link> */}
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-[14px] leading-[16px]">
              {"ДРУГОЕ"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
