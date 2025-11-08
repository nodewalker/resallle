import { Providers } from "@/lib/providers";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="ru" data-scroll-behavior="smooth">
      <body>
        <div className="w-full h-[25px] text-center text-black text-[16px] bg-red-600">
          In devopment{" "}
          <a
            href="https://github.com/nodewalker/resallle"
            target="_blank"
            className="text-blue-500"
          >
            GitHub
          </a>
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
