import { Routes } from "@/utils/const";
import Image from "next/image";
import Link from "next/link";

export const Collections = () => {
  return (
    <div className="container">
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
              href={`${Routes.catalog.name}?col=summer-vibe`}
              className="sm:w-[280px] w-[239px] h-[50px] flex items-center justify-center bg-[#121212] text-[14px] leading-[24px] tracking-[1px] text-white rounded-3xl"
            >
              к коллекции
            </Link>
          </div>
        </div>
        <div className="max-w-full flex flex-col items-center gap-[10px]">
          <Link
            href={`${Routes.catalog.name}?${Routes.catalog.collection}=active`}
            className="w-full min-w-[352px] h-[380px] overflow-hidden relative rounded-4xl"
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
            href={`${Routes.catalog.name}?${Routes.catalog.collection}=everyday`}
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
      <div className="h-[400px] flex gap-5 mt-10 flex-row items-center justify-between overflow-x-scroll">
        <div className="w-[310px]">
          <div className="font-normal text-[65px] leading-[65px] tracking-[-4px]">
            {"Наши коллекции"}
          </div>
          <div className="mt-5 font-normal text-[18px] leading-[26px] tracking-[-0.3px] text-[#121212] opacity-[80%]">
            {"Наши фавориты для повседневного стиля — "}
            <span className="italic">{"удобно, модно, вдохновляюще"}</span>
          </div>
          <Link
            href={"/all"}
            className="flex mt-5 items-center justify-center w-[280px] h-[50px] font-medium text-[14px] leading-[24px] tracking-[1px] border-[1px] border-[#121212] rounded-4xl"
          >
            {"к коллекциям"}
          </Link>
        </div>
        <Link
          href={`${Routes.catalog.name}?${Routes.catalog.collection}=tishki`}
          className="md:min-w-[479px] min-w-[350px] h-[380px] block relative overflow-hidden rounded-4xl"
        >
          <Image
            src={"/head4.png"}
            alt="at"
            width={528}
            height={792}
            style={{
              position: "absolute",
              top: "-360px",
              left: "50%",
              transform: "translate(-50%)",
              minWidth: "528px",
              height: "770px",
            }}
          />
          <div className="absolute sm:w-[273px] w-[250px] sm:bottom-[30px] bottom-[24px] sm:left-[30px] left-[24px] font-normal sm:text-[40px] text-[32px] sm:leading-[40px] leading-[32px] tracking-[-3px] text-white">
            {"Наши лучшие тишки"}
          </div>
        </Link>
        <Link
          href={`${Routes.catalog.name}?${Routes.catalog.collection}=classic`}
          className="md:min-w-[479px] min-w-[350px] h-[380px] block relative overflow-hidden rounded-4xl"
        >
          <Image
            src={"/head5.png"}
            alt="at"
            width={594}
            height={792}
            style={{
              position: "absolute",
              top: "-160px",
              left: "62%",
              transform: "translate(-50%)",
              minWidth: "594px",
              height: "792px",
            }}
          />
          <div className="absolute w-[290px] sm:bottom-[30px] bottom-[24px] sm:left-[30px] left-[24px] font-normal sm:text-[40px] text-[32px] sm:leading-[40px] leading-[32px] tracking-[-3px] text-white">
            {"Нестареющая классика"}
          </div>
        </Link>
      </div>
      <div className="w-full h-[1px] my-7 bg-[#121212] opacity-[14%]"></div>
    </div>
  );
};
