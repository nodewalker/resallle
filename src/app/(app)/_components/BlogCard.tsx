import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({
  img,
  title,
  text,
  href,
}: {
  img: string; // URL
  title: string;
  text: string;
  href: string;
}): React.ReactElement => {
  return (
    <div className="w-full flex lg:flex-row flex-col gap-10 items-center lg:justify-between justify-start">
      <div className="max-w-[655px] w-full h-[370px] relative rounded-3xl overflow-hidden">
        {/* TODO: IMAGE */}
        <Image
          src={img}
          alt={"blog icon"}
          layout="fill"
          style={{
            objectFit: "cover",
            // left: "50%",
            // top: "50%",
            // transform: "translate(-50%, -50%)",
          }}
        />
      </div>
      <div className="max-w-[600px]">
        <div className="font-normal sm:text-[60px] text-[40px] sm:leading-[65px] leading-[48px] tracking-[-2px] mb-[20px]">
          {title}
        </div>
        <div className="font-normal sm:text-[18px] text-[16px] leading-[26px] tracking-[-0.3px] opacity-[80%] mb-[24px]">
          {text}
        </div>
        <Link
          href={href}
          className="w-[170px] h-[50px] border-[1px] border-[#121212] bg-transparent hover:bg-[#121212] rounded-3xl font-medium text-[14px] leading-[24px] tracking-[1px] text-[#121212] hover:text-white flex items-center justify-center transition-colors ease-in duration-150"
        >
          {"Читать"}
        </Link>
      </div>
    </div>
  );
};
