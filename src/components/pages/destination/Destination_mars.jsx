import img from "../../../assets/destination/image-mars.webp";
import ContainerDestination from "../../layout/ContainerDestination";

export default function Destination_mars() {
  return (
    <ContainerDestination
      img={img}
      h1="Mars"
      description="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
      p1="Avg. distance"
      p2="Est. travel time"
      spanP1="225 mil. km"
      spanP2="9 months"
    />
  );
}
