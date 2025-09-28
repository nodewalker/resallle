"use client";

import { Logo } from "@/components";
import { UserRegister } from "@/lib/api";
import { useAppDispatch } from "@/lib/redux";
import { login } from "@/lib/redux/store/user";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import React from "react";

const SignUp = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const mutation = useMutation({
    mutationFn: UserRegister,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const regAction = async (formData: FormData): Promise<void> => {
    formData.append("avatar", "https://picsum.photos/800");
    const data = await mutation.mutateAsync(formData);
    console.log(data);
    if (data?.id && data?.name) {
      dispatch(login({ id: data?.id as number, name: data?.name as string }));
    }
  };

  return (
    <div className="flex flex-col gap-4 text-center">
      <Logo />
      <div className="text-left font-medium text-[18px] text-[#2f2f2f] leading-[30px]">
        Добро пожаловать
      </div>
      <form
        action={regAction}
        className="font-normal text-left text-[#333333] text-[15px]"
      >
        <label htmlFor="name" className="text-[12px]">
          Имя
        </label>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          required
          className="w-full h-[45px] py-[10px] px-[15px] placeholder:text-[#808080] focus:outline-0 bg-[#F2F2F2] border-[1px] border-[#E5E5E5] rounded-lg mb-[10px]"
        />

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

export default SignUp;
