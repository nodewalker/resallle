import { fetchWithUrl } from "..";

export const UserRegister = async (data: FormData) => {
  const res = await fetchWithUrl("/auth/signup", {
    method: "post",
    body: data,
  });
  return res.json();
};
