"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HeroPrinciple } from "./components/HeroPrinciple";
import { SectionAbout } from "./components/SectionAbout";
import { SectionBenefits } from "./components/SectionBenefits";
import CursosSection from "./components/CursosSection";
import { SectionAccessAnywhere } from "./components/SectionAccessAnywhere";
import DepoimentoSection from "./components/DepoimentoSection";
import ContatoSection from "./components/ContatoSection";
import Footer from "./components/footer";

export default function HomeClient() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (typeof window === 'undefined') return;
    if (params.get("sessionExpired")) {
      toast.error("Sua sessão expirou. Por favor, faça login novamente.");
      console.log("Sessão expirada.");

      setTimeout(() => {
        router.replace(window.location.pathname);
      }, 1000);
    }
  }, [router]);

  return (
    <>
      <ToastContainer/>
      <HeroPrinciple />
      <SectionAbout />
      <SectionBenefits />
      <CursosSection />
      <SectionAccessAnywhere />
      <DepoimentoSection />
      <ContatoSection />
      <Footer />
    </>
  );
}