import { fetchWithAuth } from "..";

export const UserProfile = async (accessToken: string) => {
  const res = await fetchWithAuth("/user", {
    method: "get",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
