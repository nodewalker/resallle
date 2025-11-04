"use client";

import { useAppDispatch } from "../redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserProfile } from "../api";
import { useEffect } from "react";
import { login } from "../redux/store/user";

export const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const userProfile = useMutation({
    mutationFn: UserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  useEffect(() => {
    const fetchAuth = async () => {
      const access_token = localStorage.getItem("access");
      if (access_token) {
        const user = await userProfile.mutateAsync(access_token);
        if (user?._uuid) dispatch(login(user));
      }
    };

    fetchAuth();
  }, []);

  return <>{children}</>;
};
