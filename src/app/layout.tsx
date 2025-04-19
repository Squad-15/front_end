"use client";
import { usePathname } from "next/navigation";
import { Header } from "./components/Header";
import { ToastContainer } from 'react-toastify';
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  const noHeaderRoutes = ["/login", "/modulo", "/register"];

  const showHeader = !noHeaderRoutes.includes(pathname);
  return (
    <html lang="en">
      <body>
        {showHeader && <Header />}
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
