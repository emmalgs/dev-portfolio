import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emma Gerig — Software Engineer",
  description: "Portfolio of Emma Gerig, full-stack software engineer and artist.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
