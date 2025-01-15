import img from "../../../assets/destination/image-titan.webp";
import ContainerDestination from "../../layout/ContainerDestination";

export default function Destination_titan() {
  return (
    <ContainerDestination
      img={img}
      h1="Titan"
      description="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
      p1="Avg. distance"
      p2="Est. travel time"
      spanP1="1.6 bil. km"
      spanP2="7 years"
    />
  );
}
