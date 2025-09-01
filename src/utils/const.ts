import { TrendCategoryType } from "./type";

export const Routes = {
  gifts: "/gifts",
  catalog: "/catalog",
  blog: "/blog",
};

export const TrendCategories: TrendCategoryType[] = [
  { id: 0, name: "Обувь", tag: "shoes" },
  { id: 1, name: "Футболки", tag: "shirt" },
  { id: 2, name: "Куртки", tag: "jackets" },
  { id: 3, name: "Головные уборы", tag: "hats" },
  { id: 4, name: "Аксессуары", tag: "accessories" },
];
