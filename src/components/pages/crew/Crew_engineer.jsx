import ContainerCrew from "../../layout/ContainerCrew";
import img from "../../../assets/crew/image-anousheh-ansari.webp";

export default function Crew_engineer() {
  return (
    <ContainerCrew
      img={img}
      h1="Anousheh Ansari"
      h2="Flight Engineer"
      description="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the firstIranian in space."
    />
  );
}
