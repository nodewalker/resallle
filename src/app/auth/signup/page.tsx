"use client";

import { Logo } from "@/components";
import { UserProfile, UserRegister } from "@/lib/api";
import { useAppDispatch, useAppSelector } from "@/lib/redux";
import { IsUserAuth, login } from "@/lib/redux/store/user";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SignUp = () => {
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(IsUserAuth);
  const navigate = useRouter();

  useEffect(() => {
    if (isAuth) navigate.push("/");
  }, [isAuth, navigate]);

  const registrationRes = useMutation({
    mutationFn: UserRegister,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
  const userProfileRes = useMutation({
    mutationFn: UserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const regAction = async (formData: FormData): Promise<void> => {
    const tokens = await registrationRes.mutateAsync(formData);
    if (tokens?.statusCode === 400) {
      setError(tokens.message);
    } else if (tokens.access_token) {
      localStorage.setItem("access", tokens.access_token);
      localStorage.setItem("refresh", tokens.refresh_token);
      const user = await userProfileRes.mutateAsync(tokens.access_token);
      if (user?._uuid) {
        dispatch(login(user));
      } else setError(user.message);
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
        <label htmlFor="firstName" className="text-[12px]">
          Имя
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Имя"
          required
          className="w-full h-[45px] py-[10px] px-[15px] placeholder:text-[#808080] focus:outline-0 bg-[#F2F2F2] border-[1px] border-[#E5E5E5] rounded-lg mb-[10px]"
        />

        <label htmlFor="lastName" className="text-[12px]">
          Фамилия
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="Фамилия"
          required
          className="w-full h-[45px] py-[10px] px-[15px] placeholder:text-[#808080] focus:outline-0 bg-[#F2F2F2] border-[1px] border-[#E5E5E5] rounded-lg mb-[10px]"
        />

        <label htmlFor="login" className="text-[12px]">
          Логин
        </label>
        <input
          type="text"
          name="login"
          placeholder="Логин"
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
          Регистрация
        </button>
      </form>
    </div>
  );
};

export default SignUp;
