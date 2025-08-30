import {
  faMagnifyingGlass,
  faHeart,
  faUser,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RefObject } from "react";

export const SideBar = ({
  setOpen,
  searchRef,
  handleSearch,
  isOpen,
  isStartAnimation,
}: {
  setOpen: (v?: boolean) => void;
  searchRef: RefObject<{
    header: HTMLInputElement | null;
    sideBar: HTMLInputElement | null;
  }>;
  handleSearch: () => void;
  isOpen: boolean;
  isStartAnimation: boolean;
}) => {
  return (
    <div
      data-state={`${isStartAnimation ? "open" : "close"}`}
      className={`${
        isOpen ? "fixed" : "hidden"
      } right-0 top-0 w-[310px] h-[100vh] py-7 px-5 flex flex-col items-center gap-7 bg-[#707070] opacity-90 transition-all ease-in-out duration-100 data-[state=open]:animate-sidebar-open data-[state=close]:animate-sidebar-close`}
    >
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
      {/* LEFT SIDE: ICONS (LIKES, PROFILE, CART) */}
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
      {/* MIDDLE SIDE: SEARCH, CATEGORIES, GIFT CARDS */}
      <div className="w-full flex flex-col justify-center gap-5">
        <div className="max-w-full h-[35px] relative">
          <input
            type="text"
            name="search"
            ref={(ref) => {
              searchRef.current.sideBar = ref;
            }}
            placeholder="Поиск"
            className="w-full h-[100%] pl-[15px] pr-[40px] border-[1px] border-white rounded-2xl focus:outline-0 text-[14px] text-white leading-[18px] placeholder:text-white"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-3 top-[9px] cursor-pointer"
            onClick={handleSearch}
          />
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <div className="font-[600] text-[14px] leading-[16px] tracking-normal text-white">
            Каталог
          </div>
        </div>
        <div className="font-[600] text-[14px] leading-[16px] tracking-normal cursor-pointer text-white">
          Подарочные карты
        </div>
      </div>
    </div>
  );
};
