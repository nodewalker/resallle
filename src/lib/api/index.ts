import { UserRegister } from "./user/register";

export const fetchWithUrl = async (url: string, init?: RequestInit) => {
  const apiUrl = process.env.API_URL || "https://api.escuelajs.co/api/v1";
  return fetch(`${apiUrl}${url}`, {
    credentials: "include",
    cache: "no-store",
    ...init,
  });
};

export { UserRegister };
