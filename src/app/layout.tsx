import type { Metadata } from "next";
import { IM_Fell_English, Share_Tech_Mono, VT323 } from "next/font/google";
import "./globals.css";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const imFellEnglish = IM_Fell_English({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-im-fell",
});

export const metadata: Metadata = {
  title: "Emma Gerig — Software Engineer",
  description: "Portfolio of Emma Gerig, full-stack software engineer and artist.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${shareTechMono.variable} ${vt323.variable} ${imFellEnglish.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
