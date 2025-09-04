"use client";

import Link from "next/link";
import { Routes, TrendCategories } from "../utils/const";
import { TrendCategoryType } from "../utils/type";

export const Footer = () => {
  const newsSub = (formData: FormData) => {
    const email: string = formData.get("email") as string;
    console.log(email);
  };

  return (
    <div className="pt-[85px] relative">
      <div className="absolute top-0 left-[50%] md:px-[40px] px-[15px] md:py-[40px] py-[20px] transform-[translate(-50%)] max-w-[1165px] w-[90%] bg-[#121212] rounded-3xl flex lg:flex-row flex-col gap-5 items-center justify-between drop-shadow-sm drop-shadow-white">
        <div className="font-bold lg:text-left text-center md:text-[40px] text-[26px] leading-[45px] text-white tracking-normal">
          {"БУДЬТЕ В КУРСЕ НАШИХ ПОСЛЕДНИХ ПРЕДЛОЖЕНИЙ"}
        </div>
        <form
          action={newsSub}
          className="max-w-[350px] w-full flex flex-col gap-5 shrink-0"
        >
          <input
            name="email"
            type="email"
            placeholder="Введите адрес Вашей почты"
            className="max-w-full h-[40px] px-[10px] py-[5px] rounded-4xl text-[15px] text-[#121212] font-normal bg-white border-0 focus:outline-0 placeholder:text-[#000000] placeholder:opacity-[40%]"
          />
          <button
            className="max-w-full h-[40px] bg-white font-medium text-[16px] rounded-4xl cursor-pointer"
            type="submit"
          >
            {"Подписаться на рассылку"}
          </button>
        </form>
      </div>
      <div className="lg:pt-[100px] pt-[220px] w-full bg-[#121212]">
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
          </div>
          <div className="flex gap-20 items-start flex-wrap">
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-[14px] leading-[16px]">
                {"ПОПУЛЯРНОЕ"}
              </div>
              {TrendCategories.map((el: TrendCategoryType) => {
                return (
                  <Link
                    key={el.id}
                    href={`${Routes.catalog}?t=${el.tag}`}
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
              <Link
                href={Routes.catalog.name}
                className="font-medium opacity-[52%] text-[13px] leading-[16px]"
              >
                {"Каталог товаров"}
              </Link>
              <Link
                href={Routes.gifts}
                className="font-medium opacity-[52%] text-[13px] leading-[16px]"
              >
                {"Подарочные карты"}
              </Link>
              <Link
                href={Routes.blog}
                className="font-medium opacity-[52%] text-[13px] leading-[16px]"
              >
                {"Блог"}
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-[14px] leading-[16px]">
                {"ДРУГОЕ"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
