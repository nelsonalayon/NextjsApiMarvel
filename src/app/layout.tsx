import NavBar from "@/components/navBar/navBar";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "100"
});

export const metadata: Metadata = {
  title: "Marvel Project",
  description: "App created with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <header><NavBar/></header>
        
        {children}</body>
     
    </html>
  );
}
