import Image from "next/image";

export const BenefitBlock = ({
  img,
  title,
  text,
}: {
  img: string; // URL
  title: string;
  text: string;
}): React.ReactElement => {
  return (
    <div className="max-w-[410px] min-w-[350px]">
      <Image
        src={img}
        alt={"benefit"}
        width={120}
        height={120}
        className="sm:w-[120px] w-[80px] sm:h-[120px] h-[80px]"
      />
      <div className="font-medium sm:text-[30px] text-[26px] leading-[40px] tracking-[-1px] mt-[20px]">
        {title}
      </div>
      <div className="font-normal sm:text-[18px] text-[16px] leading-[26px] tracking-[-0.3px] opacity-[80%] mt-[4px]">
        {text}
      </div>
    </div>
  );
};
