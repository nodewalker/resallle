import { fetchWithAuth } from "..";

export const GetCategories = async () => {
  const clotherId = "946cb1bf-c813-4a5f-8ed8-68f86280589b";
  const res = await fetchWithAuth(`/category/${clotherId}/children?all=true`, {
    method: "get",
  });
  return res;
};
