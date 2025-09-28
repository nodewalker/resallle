import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href={"/"}
      className={`font-extrabold text-[30px] text-[#2f2f2f] leading-[30px] cursor-pointer select-none`}
    >
      RESALLLE
    </Link>
  );
};
