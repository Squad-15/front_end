"use client";

import { usePathname } from "next/navigation";
import { Header } from "./components/Header";
import { ToastContainer } from 'react-toastify';
import "./globals.css";
import { HeaderScreenModulo } from "./components/HeaderScreenModulo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Rotas que não devem mostrar o Header
  const noHeaderRoutes = ["/login", "/register", "/modulo", "/video", "/path", "/ranking", "/dashboard", "/general", "/manage-courses", "/shop", "/profile"];

  // Rotas que não devem mostrar o HeaderScreenModulo
  const noHeaderScreenModuloRoutes = ["/dashboard", "/general", "/manage-courses", "/video", "/", "/login", "/register", "/service", "/projects", "/location", "/contact", "/about"];

  const showHeader = !noHeaderRoutes.includes(pathname);
  const showHeaderScreenModulo = !noHeaderScreenModuloRoutes.includes(pathname);

  return (
    <html lang="en">
      <body>
        {showHeader && <Header />}
        {showHeaderScreenModulo && <HeaderScreenModulo />}
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
