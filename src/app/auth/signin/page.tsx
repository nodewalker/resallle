"use client";

import { Logo } from "@/components";

const SignIn = (): React.ReactElement => {
  const loginAction = async (data: FormData): Promise<void> => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-4 text-center">
      <Logo />
      <div className="text-left font-medium text-[18px] text-[#2f2f2f] leading-[30px]">
        Рад снова тебя видеть
      </div>
      <form
        action={loginAction}
        className="font-normal text-left text-[#333333] text-[15px]"
      >
        <label htmlFor="email" className="text-[12px]">
          Почта
        </label>
        <input
          type="email"
          name="email"
          placeholder="Почта"
          required
          className="w-full h-[45px] py-[10px] px-[15px] placeholder:text-[#808080] focus:outline-0 bg-[#F2F2F2] border-[1px] border-[#E5E5E5] rounded-lg mb-[10px]"
        />
        <label htmlFor="password" className="text-[12px]">
          Пароль
        </label>
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          required
          className="w-full h-[45px] py-[10px] px-[15px] placeholder:text-[#808080] focus:outline-0 bg-[#F2F2F2] border-[1px] border-[#E5E5E5] rounded-lg"
        />
        <button
          type="submit"
          className="w-full mt-[25px] h-[40px] bg-[#121212] text-white rounded-lg cursor-pointer"
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default SignIn;
