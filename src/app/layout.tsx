import type { Metadata } from "next";
import { DM_Sans, Fontdiner_Swanky } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const fontdinerSwanky = Fontdiner_Swanky({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fontdiner-swanky",
});

export const metadata: Metadata = {
  title: "Emma Gerig",
  description: "Portfolio of Emma Gerig",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fontdinerSwanky.variable}`}>
      <body>{children}</body>
    </html>
  );
}
