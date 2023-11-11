import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import AppBar from "./components/AppBar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soul",
  description: "Marketplace Tarot, Astrology, Numerology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="bg-my-image bg-cover bg-no-repeat bg-[#1E1E1E] ">
        <Providers>
          <AppBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
