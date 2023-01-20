import { PT_Sans } from "@next/font/google";
import "../globals.css";

const inter = PT_Sans({ subsets: ["latin"], display: "block", weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className}>
      <head />
      <body className="padded-section bg-black text-white">{children}</body>
    </html>
  );
}
