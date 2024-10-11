import type { Metadata } from "next";
import "./globals.css";
import { baseFont } from "@/config/fonts";


export const metadata: Metadata = {
  title: "Summary to Interval Tool",
  description: "Summary to Interval Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={baseFont.className}>{children}</body>
    </html>
  );
}
