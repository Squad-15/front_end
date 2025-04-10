import { HeroPrinciple } from "./components/HeroPrinciple";
import { SectionAbout } from "./components/SectionAbout";
import { SectionBenefits } from "./components/SectionBenefits";

export default function Home() {
    return (
        <>
        <HeroPrinciple />
        <SectionAbout />
        <SectionBenefits />
        </>
    );
}