import type { Metadata } from "next";
import { Nixie_One } from "next/font/google";
import localFont from "next/font/local";
import Providers from "./components/Providers";
import AppBar from "./components/AppBar";
import "./globals.css";

const nixeOne = Nixie_One({
  weight: "400",
  preload: false,
  variable: "--font-nixieone",
});

const nicoMoji = localFont({
  src: "../../public/fonts/Nico-Moji.ttf.woff",
  display: "swap",
  variable: "--font-nicomoji",
});

const myanmarmn = localFont({
  src: "../../public/fonts/myanmar-mn.ttf",
  display: "swap",
  variable: "--font-myanmar-mn",
});

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
    <html
      lang="en"
      className={`${nixeOne.variable} ${nicoMoji.variable}   ${myanmarmn.variable}`}
    >
      <body className="bg-my-image bg-cover bg-no-repeat bg-[#050F25] ">
        <Providers>
          <AppBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
