import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "The Real South Face",
  description: "Application de gestion des evenements",
};

export default function RootLayout({children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body > {children}</body>
    </html>
  );
}
