import React from "react";
import Footer from "../components/footer";
import ModalVideo from "../components/modalVideo"; // ou o caminho correto relativo

export default function VideoPage() {
  return (
    <div>
      <ModalVideo />
      {/* Footer */}
      <Footer />
    </div>
  );
}
