import { fetchWithUrl } from "..";

export const UserLogin = async (data: FormData) => {
  const res = await fetchWithUrl("/auth/signin", {
    method: "post",
    body: data,
  });
  return res.json();
};
