import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../_components";

export const metadata: Metadata = {
  title: "Resallle",
  description: "Think about",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
