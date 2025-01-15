import img from "../../../assets/destination/image-europa.webp";
import ContainerDestination from "../../layout/ContainerDestination";

export default function Destination_europa() {
  return (
    <ContainerDestination
      img={img}
      h1=" Europa"
      description="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
      p1=" Avg. distance"
      p2="Est. travel time"
      spanP1="628 mil. km"
      spanP2="3 years"
    />
  );
}
