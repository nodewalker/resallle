import { BenefitBlock } from "./BenefitBlock";

export const Benefits = (): React.ReactElement => {
  return (
    <div className="container">
      <div className="max-w-[900px] w-full font-normal sm:text-[60px] text-[40px] sm:leading-[65px] leading-[48px] tracking-[-3px] sm:mb-[50px] mb-[30px]">
        Почему Вам понравится делать покупки на нашем сайте
      </div>
      <div className="flex flex-row justify-between gap-5 overflow-x-scroll pb-5">
        <BenefitBlock
          img={"/benefit1.png"}
          title={"Заботимся с любовью"}
          text={
            "Мы заботимся о вашей посылке с большим вниманием и любовью. Мы хотим быть уверены, что Вы получите свою посылку так же, как подарок на день рождения."
          }
        />
        <BenefitBlock
          img={"/benefit2.png"}
          title={"Дружелюбная поддержка"}
          text={
            "Вам не нужно беспокоиться, когда вы захотите проверить свою посылку. Мы всегда ответим на любые ваши вопросы. Просто нажмите на значок чата, и мы поговорим."
          }
        />
        <BenefitBlock
          img={"/benefit3.png"}
          title={"Процесс возврата"}
          text={
            "Возврат средств - это очень неприятный опыт, и мы не хотим, чтобы с вами такое случилось. Но когда это произойдет, мы позаботимся о том, чтобы процесс возврата прошел гладко."
          }
        />
      </div>
    </div>
  );
};
