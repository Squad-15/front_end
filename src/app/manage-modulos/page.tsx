import CabecalhoTrilhasModulos from "../components/CabecalhoTrilhasModulos";
import FiltroTrilhasModulos from "../components/FiltroTrilhas";
import ModuloDentroDaTrilha from "../components/ModuloDentroDaTrilha";

export default function ModulosPage() {

  return (
    <div className="p-6">
      <CabecalhoTrilhasModulos />
      <FiltroTrilhasModulos />
      <ModuloDentroDaTrilha/>
    </div>
  );
}
