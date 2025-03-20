import type { Metadata } from "next";
import "./globals.css";
import { baseFont } from "@/config/fonts";


export const metadata: Metadata = {
  title: "MultiStep Form",
  description: "MultiStep Form",
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
