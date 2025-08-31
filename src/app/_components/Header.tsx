"use client";

import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleDown,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { SideBar } from "./SideBar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Routes } from "../_utils/const";

export const Header = (): React.ReactElement => {
  // SEARCH INPUT
  const searchRef: RefObject<{
    header: HTMLInputElement | null;
    sideBar: HTMLInputElement | null;
  }> = useRef<{
    header: HTMLInputElement | null;
    sideBar: HTMLInputElement | null;
  }>({ header: null, sideBar: null });

  // SIDEBAR
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);

  // REDIRECT
  const router = useRouter();

  // ON SEARCH BTN CLICK
  const handleSearch = useCallback(() => {
    if (searchRef.current.header?.value)
      router.push(`catalog?s=${searchRef.current.header.value}`);
    if (searchRef.current.sideBar?.value)
      router.push(`catalog?s=${searchRef.current.sideBar.value}`);
    if (searchRef.current.header) searchRef.current.header.focus();
    if (searchRef.current.sideBar) searchRef.current.sideBar.focus();
  }, [router, searchRef]);

  // USE EFFECT
  useEffect((): (() => void) => {
    // SEARCH ON ENTER BTN
    const handelEnterIntoSearch = (e: KeyboardEvent) => {
      console.log(e.key);
      if (e.key === "Enter") handleSearch();
    };
    if (searchRef.current.header)
      searchRef.current.header.addEventListener(
        "keydown",
        handelEnterIntoSearch
      );
    if (searchRef.current.sideBar)
      searchRef.current.sideBar.addEventListener(
        "keydown",
        handelEnterIntoSearch
      );

    // SIDEBAR ON RESIZE
    const handleResize = async (): Promise<void> => {
      if (window.innerWidth >= 1024) {
        setSideBarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleSearch]);

  // ON SIDEBAR BTN CLICK
  const handleSideBar = (v: boolean) => {
    if (v) {
      setSideBarOpen(true);
    } else {
      setSideBarOpen(false);
    }
  };

  return (
    <>
      <header className="container h-[80px] flex items-center justify-between">
        {/* LEFT SIDE: LOGO */}
        <div
          className={`font-[800] text-[24px] text-[#2f2f2f] leading-[30px] cursor-pointer select-none`}
        >
          RESALLLE
        </div>
        {/* MIDDLE SIDE: SEARCH, CATEGORIES, GIFT CARDS */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="max-w-[370px] h-[35px] relative">
            <input
              ref={(ref) => {
                searchRef.current.header = ref;
              }}
              type="text"
              name="search"
              placeholder="Поиск"
              className="w-[330px] h-[100%] pl-[15px] pr-[40px] border-[1px] border-[#e3e3e3] rounded-2xl focus:outline-0 text-[14px] leading-[18px] placeholder:text-[#737B8B]"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute right-3 top-[9px] cursor-pointer"
              onClick={handleSearch}
            />
          </div>
          <div className="flex gap-1 items-center cursor-pointer">
            {/* TODO: OPEN MODAL WIN WITH CATEGORIES */}
            <div className="font-[600] text-[14px] leading-[16px] tracking-normal">
              {"Все категории"}
            </div>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <Link
            href={Routes.gifts}
            className="font-[600] text-[14px] leading-[16px] tracking-normal cursor-pointer"
          >
            Подарочные карты
          </Link>
        </div>
        {/* RIGHT SIDE: ICONS (LIKES, PROFILE, CART) */}
        <div className="hidden lg:flex items-center gap-5">
          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            className="cursor-pointer"
          />
          <FontAwesomeIcon icon={faUser} size="lg" className="cursor-pointer" />
          <FontAwesomeIcon
            icon={faCartShopping}
            size="lg"
            className="cursor-pointer"
          />
        </div>

        {/* SIDEBAR BTN CLOSE/OPEN */}
        <div
          className={`${
            isSideBarOpen ? "opacity-0" : "opacity-100"
          } lg:hidden cursor-pointer transition-opacity ease-in-out duration-100`}
          onClick={() => handleSideBar(true)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      </header>
      {/* SIDEBAR */}
      <SideBar
        setOpen={handleSideBar}
        searchRef={searchRef}
        handleSearch={handleSearch}
        isOpen={isSideBarOpen}
      />
    </>
  );
};
