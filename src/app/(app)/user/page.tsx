"use client";

import { useAppSelector } from "@/lib/redux";
import { IsUserAuth, IsUserLoading } from "@/lib/redux/store/user";
import { Routes } from "@/utils/const";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function User(): React.ReactElement {
  const navigate = useRouter();
  const isAuth = useAppSelector(IsUserAuth);
  const isUserLoading = useAppSelector(IsUserLoading);

  useEffect(() => {
    if (isUserLoading && !isAuth) navigate.push(Routes.signin);
  }, [isAuth, isUserLoading, navigate]);

  return <div>page</div>;
}
