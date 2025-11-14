import { TrendCategoryType } from "./type";

export const Routes = {
  main: "/",
  gifts: "/gifts",
  catalog: { name: "/catalog", category: "t", collection: "c" },
  item: "/item",
  blog: "/blog",
  user: "/user",
  favorite: "/user/favorite",
  cart: "/user/cart",
  signin: "/auth/signin",
  signup: "/auth/signup",
};

export const TrendCategories: TrendCategoryType[] = [
  { id: 0, name: "Обувь", tag: "shoes" },
  { id: 1, name: "Футболки", tag: "shirt" },
  { id: 2, name: "Куртки", tag: "jackets" },
  { id: 3, name: "Рубашки", tag: "t-shirt" },
  { id: 4, name: "Джинсы", tag: "jeans" },
];
