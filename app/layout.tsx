import { PT_Sans } from "@next/font/google";
import Header from "./(components)/header/Header";
import "./globals.css";

const inter = PT_Sans({ subsets: ["latin"], display: "block", weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className}>
      <head />
      <body className="bg-black text-white">
        <Header />
        <div className="padded-section">{children}</div>
      </body>
    </html>
  );
}
