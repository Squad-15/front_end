"use client";

import { usePathname } from "next/navigation";
import { Header } from "./components/Header";
import { ToastContainer } from 'react-toastify';
import "./globals.css";
import { HeaderScreenModulo } from "./components/HeaderScreenModulo";
import { HeaderScreenStep } from "./components/StepModulos";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Rotas que não devem mostrar o Header
  const noHeaderRoutes = ["/login", "/register", "/modulo", "/video", "/path"];

  // Rotas que não devem mostrar o HeaderScreenModulo
  const noHeaderScreenModuloRoutes = ["/dashboard", "/general", "/video", "/", "/login", "/register"];

  const noHeaderSteppersRoutes = ["/video", "/login", "/register", "/", "/dashboard"];

  const showHeader = !noHeaderRoutes.includes(pathname);
  const showHeaderScreenModulo = !noHeaderScreenModuloRoutes.includes(pathname);
  const showHeaderScreenStep = !noHeaderSteppersRoutes.includes(pathname);


  return (
    <html lang="en">
      <body>
        {showHeader && <Header />}
        {showHeaderScreenModulo && <HeaderScreenModulo />}
        {showHeaderScreenStep && <HeaderScreenStep etapaConcluida={0} />}
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
