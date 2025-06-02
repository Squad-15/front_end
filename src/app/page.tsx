"use client";

// Preciso ver aqui a questão do redirecionamento de sessão expirada

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HeroPrinciple } from "./components/HeroPrinciple";
import { SectionAbout } from "./components/SectionAbout";
import { SectionBenefits } from "./components/SectionBenefits";

export default function HomeClient() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("sessionExpired")) {
      toast.error("Sua sessão expirou. Por favor, faça login novamente.");
      console.log("Sessão expirada.");

      // // Remove o query param da URL sem reload
      // router.replace(window.location.pathname);

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
    </>
  );
}


// import { HeroPrinciple } from "./components/HeroPrinciple";
// import { SectionAbout } from "./components/SectionAbout";
// import { SectionBenefits } from "./components/SectionBenefits";

// export default function Home() {
//     return (
//         <>
//         <HeroPrinciple />
//         <SectionAbout />
//         <SectionBenefits />
//         </>
//     );
// }
