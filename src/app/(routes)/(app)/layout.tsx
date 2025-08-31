import { Footer, Header } from "@/app/_components";
import { Metadata } from "next";

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
    <>
      <Header />
      {/* TODO: MAKE HEADER FIXED */}
      {/* <div className="pt-[80px]">{children}</div> */}
      {children}
      <Footer />
    </>
  );
}
