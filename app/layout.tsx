import { Footer, NavBar } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
