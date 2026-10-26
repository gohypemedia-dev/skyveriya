import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SKYVERIYA — The World of Creators",
  description:
    "A bespoke editorial atelier and creative collective. Nine Clouds, infinite values. Bespoke creative direction, design, and storytelling.",
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
        className="min-h-full flex flex-col bg-[#BC4639] text-[#F3E0DC] selection:bg-[#5C2018] selection:text-[#F3E0DC]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

