import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SKYVERIYA — The World of Creators",
  description: "SKYVERIYA — The World of Creators. Nine Clouds, infinite values.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#BC4639] text-[#F3E0DC] selection:bg-[#F3E0DC] selection:text-[#5C2018]"
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
