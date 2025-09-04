import Image from "next/image";

export const Reviews = (): React.ReactElement => {
  return (
    <div className="container w-full !py-7">
      <div className="w-full h-[550px] relative overflow-hidden rounded-4xl">
        <Image
          src={"/rev1.png"}
          alt={"review"}
          width={1362}
          height={697}
          style={{
            display: "inline-block",
            position: "absolute",
            width: "100%",
            height: "auto",
            left: "50%",
            top: "50%",
            minWidth: "1362px",
            minHeight: "697px",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="md:max-w-[656px] max-w-full w-full md:h-auto h-full absolute md:top-[50px] top-0 md:left-[50px] left-0 text-white bg-black/20 p-[28px] rounded-4xl backdrop-blur-sm">
          <div className="font-normal sm:text-[30px] text-[24px] sm:leading-[38px] leading-[28px] tracking-[-1px] opacity-[50%] mb-[10px]">
            {"Что говорят люди"}
          </div>
          <div className="font-normal sm:text-[65px] text-[45px] sm:leading-[65px] leading-[50px] sm:tracking-[-4px] tracking-[-3px] mb-[20px]">
            {"Мне нравится как они работают"}
          </div>
          <div className="font-normal text-[18px] leading-[26px] tracking-[-0.3px] opacity-[80%] sm:mb-[40px] mb-[20px]">
            {
              "Очень профессионально и в то же время дружелюбно. Они упаковали заказ в срок, а качество упаковки на высшем уровне. Это один из моих лучших впечатлений от покупок. Обязательно вернусь за другой покупкой."
            }
          </div>
          <div className="">
            <div className="font-semibold sm:text-[24px] text-[20px] leading-[32px] tracking-[-0.5px] mb-[5px]">
              {"Юлиана Кузнецова"}
            </div>
            <div className="font-normal text-[16px] leading-[22px] tracking-normal opacity-[60%]">
              {"Главный менеджер модного журнала"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
