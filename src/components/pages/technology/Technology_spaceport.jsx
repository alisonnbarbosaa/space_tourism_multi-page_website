import ContainerTechnology from "../../layout/ContainerTechnology";
import img from "../../../assets/technology/image-spaceport-portrait.jpg";

export default function Technology_spaceport() {
  return (
    <ContainerTechnology
      img={img}
      h1="Spaceport"
      h3="The terminology..."
      description="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    />
  );
}
