import { Providers } from "@/lib/providers";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="ru" className="scroll-smooth!">
      <body className="relative">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
