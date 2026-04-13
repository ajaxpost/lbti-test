import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LBTI - 恋爱行为类型测试",
  description: "你是 WIFI 还是 GHOST？30 道题测出你的恋爱人格。27 种恋爱人格类型等你解锁。",
  keywords: ["LBTI", "恋爱测试", "恋爱人格", "MBTI", "爱情测试", "恋爱风格"],
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    title: "LBTI - 你是什么类型的恋人？",
    description: "30 道题，测出你的恋爱人格。你是 WIFI 还是 GHOST？",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="antialiased">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
