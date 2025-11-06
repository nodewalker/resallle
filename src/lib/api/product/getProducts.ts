import { fetchWithAuth } from "..";

export const GetProducts = async (query: string) => {
  const res = await fetchWithAuth(`/product${query ? "?" + query : ""}`, {
    method: "get",
  });
  return res;
};
