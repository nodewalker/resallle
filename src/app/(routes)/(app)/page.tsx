import { Routes } from "@/app/_utils/const";
import Image from "next/image";
import Link from "next/link";

export default function Home(): React.ReactElement {
  return (
    <div className="container w-full">
      <div className="flex mt-5 md:flex-row flex-col items-center gap-[10px]">
        <div className="block h-[770px] w-full max-w-[958px] min-w-[352px] relative overflow-hidden rounded-4xl">
          <Image
            src={"/head1.png"}
            alt="as"
            width={957}
            height={770}
            className="lg:!left-[50%] sm:!left-[35%] !left-[20%]"
            style={{
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translate(-50%)",
              minWidth: "957px",
              height: "770px",
            }}
          />
          <div className="absolute sm:w-[320px] w-[252px] lg:top-[60px] md:top-[30px] top-[24px] lg:left-[60px] md:left-[30px] left-[24px] flex flex-col gap-5">
            <div className="font-normal sm:text-[90px] text-[56px] sm:leading-[75px] leading-[56px] tracking-[-5px] text-white">
              Цвет летнего вайба
            </div>
            <div className="italic sm:text-[18px] text-[16px] leading-[26px] tracking-[-0.3px] text-white opacity-[80%]">
              100+ вещей от лучших брендов для твоего лета
            </div>
            <Link
              href={`${Routes.catalog}?col=summer-vibe`}
              className="sm:w-[280px] w-[239px] h-[50px] flex items-center justify-center bg-[#121212] text-[14px] leading-[24px] tracking-[1px] text-white rounded-3xl cursor-pointer"
            >
              к коллекции
            </Link>
          </div>
        </div>
        <div className="max-w-full flex flex-col items-center gap-[10px]">
          <Link
            href={`${Routes.catalog}?col=active`}
            className="w-full min-w-[352px] h-[380px] overflow-hidden relative rounded-4xl cursor-pointer"
          >
            <Image
              src={"/head2.png"}
              alt="as"
              width={644}
              height={405}
              className="block absolute md:!left-[62%] sm:!left-[50%] !left-[55%] bottom-0 transform-[translate(-50%)]"
              style={{
                minWidth: "644px",
                height: "405px",
              }}
            />
            <div className="absolute sm:w-[180px] w-[140px] sm:top-[30px] top-[24px] sm:left-[30px] left-[24px]">
              <div className="font-normal sm:text-[40px] text-[32px] sm:leading-[40px] leading-[32px] text-[#121212]">
                Активный отдых
              </div>
            </div>
          </Link>
          <Link
            href={`${Routes.catalog}?col=everyday`}
            className="w-full min-w-[352px] h-[380px] overflow-hidden relative rounded-4xl"
          >
            <Image
              src={"/head3.png"}
              alt="as"
              width={845}
              height={565}
              className="block relative md:absolute md:!left-[60%] sm:!left-[50%] !left-[60%] md:!top-[-100px] !top-[0] !transform-[translate(-50%)]"
              style={{
                minWidth: "845px",
                height: "565px",
              }}
            />
            <div className="absolute sm:w-[270px] w-[190px] sm:bottom-[30px] bottom-[24px] sm:left-[30px] left-[24px]">
              <div className="font-normal sm:text-[40px] text-[32px] sm:leading-[40px] leading-[32px] text-[#ffffff]">
                Повседневный комфорт
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="">trends</div>
      <div className="">find by color</div>
      <div className="">people say</div>
      <div className="">we you love us</div>
      <div className="">post from blog</div>
    </div>
  );
}
