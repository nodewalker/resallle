export type TrendCategoryType = {
  id: number;
  name: string;
  tag: string;
};

export type QueryType = {
  key: string;
  value: string;
};

export type Category = {
  _uuid?: string;
  name?: string;
  children?: Category[];
  hasChildren?: boolean;
  hasProduct?: boolean;
};

export type ProductRes = {
  data: Product[];
  pagination: Pagination;
};

export type Product = {
  _uuid: string;
  name: string;
  price: number;
  discount: number;
  images: {
    _uuid: string;
  }[];
  category: {
    _uuid: string;
    name: string;
  };
};

export type Pagination = {
  total: number;
  page: number;
  limit: number;
  totalPage: number;
  isLastPage: boolean;
};
