"use client";

import { Provider } from "react-redux";
import { QueryProvider } from "./QueryProvider";
import store from "../redux";
import { AuthProvider } from "./AuthProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Providers = ({ children }: { children?: React.ReactNode }) => {
  return (
    <QueryProvider>
      <Provider store={store}>
        <AuthProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </AuthProvider>
      </Provider>
    </QueryProvider>
  );
};
