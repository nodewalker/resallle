import { GetProducts } from "./product/getProducts";
import { UserLogin } from "./auth/login";
import { UserProfile } from "./user/getProfile";
import { UserRegister } from "./auth/register";
import { GetCategories } from "./product/getCategories";

export const fetchWithUrl = async (url: string, init?: RequestInit) => {
  const apiUrl = process.env.API_URL || "https://fakestoreapi.ru";
  return await fetch(`${apiUrl}${url}`, {
    cache: "no-store",
    ...init,
  });
};

export const fetchWithAuth = async (url: string, init?: RequestInit) => {
  const apiUrl = process.env.API_URL || "https://fakestoreapi.ru";
  let f = await fetch(`${apiUrl}${url}`, {
    cache: "no-store",
    ...init,
  }).then((res) => res.json());

  if (f.statusCode === 401) {
    const refresh_token = localStorage.getItem("refresh");
    const refresh = await fetch(`${apiUrl}/auth/refresh?rt=${refresh_token}`, {
      method: "post",
      cache: "no-store",
    }).then((res) => res.json());
    if (refresh?.access_token) {
      localStorage.setItem("access", refresh.access_token);
      localStorage.setItem("refresh", refresh.refresh_token);
      f = await fetch(`${apiUrl}${url}`, {
        cache: "no-store",
        ...init,
        headers: { Authorization: `Bearer ${refresh.access_token}` },
      }).then((res) => res.json());
    } else {
      // delete user from redux
      return refresh;
    }
  }

  return f;
};

// AUTH
export { UserRegister, UserLogin };

// USER
export { UserProfile };

// PRODUCTS
export { GetCategories, GetProducts };
