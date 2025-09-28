import { fetchWithUrl } from "..";

export const UserRegister = async (data: FormData) => {
  const res = await fetchWithUrl("/users/", { method: "post", body: data });
  console.log(res);
  return res.json();
};
