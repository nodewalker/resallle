import { Footer, Header } from "@/components";
import { Metadata } from "next";
import { Suspense } from "react";

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
      <main className="mt-[20px] w-full">
        <Suspense fallback="catalog">{children}</Suspense>
      </main>
      <Footer />
    </>
  );
}
