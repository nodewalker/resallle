"use client";

import { RefObject, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleUp,
  faAngleDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";

export const Header = (): React.ReactElement => {
  const searchRef: RefObject<HTMLInputElement | null> = useRef(null);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);

  const handleSearchClick = () => {
    if (searchRef.current) searchRef.current.focus();
  };

  const handleCategoriesClick = () => {
    setCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <header className="container h-[80px] flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div className="font-[800] text-[24px] text-[#2f2f2f] leading-[30px] cursor-pointer select-none">
          RESALLLE
        </div>
        <div className="max-w-[370px] h-[35px] relative">
          <input
            ref={searchRef}
            type="text"
            name="search"
            placeholder="Поиск"
            className="w-[330px] h-[100%] pl-[15px] pr-[40px] border-[1px] border-[#e3e3e3] rounded-2xl focus:outline-0 text-[14px] leading-[18px] placeholder:text-[#737B8B]"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-3 top-[9px] cursor-pointer"
            onClick={handleSearchClick}
          />
        </div>
        <div
          className="flex gap-1 items-center cursor-pointer"
          onClick={handleCategoriesClick}
        >
          <div className="font-[600] text-[14px] leading-[16px] tracking-normal">
            Все категории
          </div>
          <FontAwesomeIcon icon={isCategoriesOpen ? faAngleUp : faAngleDown} />
        </div>
        <div className="font-[600] text-[14px] leading-[16px] tracking-normal cursor-pointer">
          Подарочные карты
        </div>
      </div>
      <div className="flex items-center gap-5">
        <FontAwesomeIcon icon={faHeart} size="lg" />
        <FontAwesomeIcon icon={faUser} size="lg" />
        <FontAwesomeIcon icon={faCartShopping} size="lg" />
      </div>
    </header>
  );
};
