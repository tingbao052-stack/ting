import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "科学+实验库",
  description: "记录节目名称、实验原理与实验道具的科学实验档案。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
