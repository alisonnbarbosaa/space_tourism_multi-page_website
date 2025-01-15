import ContainerCrew from "../../layout/ContainerCrew";
import img from "../../../assets/crew/image-douglas-hurley.webp";

export default function Crew_commander() {
  return (
    <ContainerCrew
      img={img}
      h1="Douglas Hurley"
      h2="Commander"
      description="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    />
  );
}
