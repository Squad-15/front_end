"use client";
import { usePathname } from "next/navigation";
import { Header } from "./components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  const noHeaderRoutes = ["/login", "/modulo"];

  const showHeader = !noHeaderRoutes.includes(pathname);
  return (
    <html lang="en">
      <body>
        {showHeader && <Header />}
        {children}
      </body>
    </html>
  )
}
