"use client";

import { Provider } from "react-redux";
import { QueryProvider } from "./QueryProvider";
import store from "../redux";
import { AuthProvider } from "./AuthProvider";

export const Providers = ({ children }: { children?: React.ReactNode }) => {
  return (
    <QueryProvider>
      <Provider store={store}>
        <AuthProvider>{children}</AuthProvider>
      </Provider>
    </QueryProvider>
  );
};
