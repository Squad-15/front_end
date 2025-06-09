import CabecalhoTrilhasModulos from "../components/CabecalhoTrilhasModulos";
import FiltroTrilhasModulos from "../components/FiltroTrilhas";
// import ListaTrilhas from "../components/ListaTrilhas";
import ModuloDentroDaTrilha from "../components/ModuloDentroDaTrilha";

export default function ModulosPage() {

  return (
    <div className="p-6">
      <CabecalhoTrilhasModulos />
      <FiltroTrilhasModulos />
      {/* <ListaTrilhas /> */}
      <ModuloDentroDaTrilha
        ordem={1}
        titulo="Fundamentos do React"
        status="ativo"
        quantidadeMateriais={10}
    />

    </div>
  );
}
