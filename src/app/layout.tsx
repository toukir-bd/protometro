
import "./globals.scss";
import type { Metadata } from "next";
import { mont, denton } from "./fonts/fonts";
import MainLayout from "./components/layout/MainLayout";

export const metadata: Metadata = {
  title: "BeRiser",
  description: "BeRiser",
  icons: {
    icon: "/img/elements/favicon.webp",
    shortcut: "/img/elements/favicon.webp",
    apple: "/img/elements/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mont.variable} ${denton.variable}`}>
      <body className="bg-[#061018] text-white">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}