import {
  faMagnifyingGlass,
  faHeart,
  faUser,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { RefObject } from "react";
import { Routes } from "../_utils/const";

export const SideBar = ({
  setOpen,
  searchRef,
  handleSearch,
  isOpen,
}: {
  setOpen: (v: boolean) => void;
  searchRef: RefObject<{
    header: HTMLInputElement | null;
    sideBar: HTMLInputElement | null;
  }>;
  handleSearch: () => void;
  isOpen: boolean;
}) => {
  return (
    <div
      className={`${
        isOpen ? "sidebar-open" : "sidebar-close"
      } w-[310px] h-[100vh] py-7 px-5 flex flex-col items-center gap-7 bg-[#707070] opacity-90 transition-all ease-in-out duration-600`}
    >
      {/* TOP SIDE: LOGO / CLOSE BTN */}
      <div className="w-full flex items-center justify-between">
        <div className="font-[800] text-[24px] text-[#020202] leading-[30px] cursor-pointer select-none">
          RESALLLE
        </div>
        <div
          className={`lg:hidden cursor-pointer`}
          onClick={() => setOpen(false)}
        >
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </div>
      </div>
      {/* MIDDLE SIDE: ICONS (LIKES, PROFILE, CART) */}
      <div className="w-full flex justify-center items-center gap-7">
        <FontAwesomeIcon
          icon={faHeart}
          size="lg"
          className="cursor-pointer text-white"
        />
        <FontAwesomeIcon
          icon={faUser}
          size="lg"
          className="cursor-pointer text-white"
        />
        <FontAwesomeIcon
          icon={faCartShopping}
          size="lg"
          className="cursor-pointer text-white"
        />
      </div>
      {/* BOTTOM SIDE: SEARCH, CATEGORIES, GIFT CARDS */}
      <div className="w-full flex flex-col justify-center gap-5">
        <div className="max-w-full h-[35px] relative">
          <input
            type="text"
            name="search"
            placeholder="Поиск"
            className="w-full h-[100%] pl-[15px] pr-[40px] border-[1px] border-white rounded-2xl focus:outline-0 text-[14px] text-white leading-[18px] placeholder:text-white"
            ref={(ref) => {
              searchRef.current.sideBar = ref;
            }}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-3 top-[9px] cursor-pointer"
            onClick={handleSearch}
          />
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          {/* TODO: OPEN MODAL WIN WITH CATEGORIES */}
          <div className="font-[600] text-[14px] leading-[16px] tracking-normal text-white">
            Каталог
          </div>
        </div>
        <Link
          href={Routes.gifts}
          className="font-[600] text-[14px] leading-[16px] tracking-normal cursor-pointer text-white"
        >
          Подарочные карты
        </Link>
      </div>
    </div>
  );
};
