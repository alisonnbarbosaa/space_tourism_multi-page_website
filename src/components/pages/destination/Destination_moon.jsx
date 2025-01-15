import img from "../../../assets/destination/image-moon.webp";
import ContainerDestination from "../../layout/ContainerDestination";

export default function Destination_moon() {
  return (
    <ContainerDestination
      img={img}
      h1="Moon"
      description="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
      p1="Avg. distance"
      p2="Est. travel time"
      spanP1="384,400 km"
      spanP2="3 days"
    />
  );
}
