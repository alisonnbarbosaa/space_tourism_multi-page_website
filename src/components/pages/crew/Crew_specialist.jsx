import ContainerCrew from "../../layout/ContainerCrew";
import img from "../../../assets/crew/image-mark-shuttleworth.webp";

export default function Crew_specialist() {
  return (
    <ContainerCrew
      img={img}
      h1="Mark Shuttleworth"
      h2="Mission Specialist"
      description="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    />
  );
}
