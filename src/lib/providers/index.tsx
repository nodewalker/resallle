"use client";

import { Provider } from "react-redux";
import { QueryProvider } from "./QueryProvider";
import store from "../redux";

export const Providers = ({ children }: { children?: React.ReactNode }) => {
  return (
    <QueryProvider>
      <Provider store={store}>{children}</Provider>
    </QueryProvider>
  );
};
