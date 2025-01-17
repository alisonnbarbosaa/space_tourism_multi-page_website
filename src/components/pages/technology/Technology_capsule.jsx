import ContainerTechnology from "../../layout/ContainerTechnology";
import img from "../../../assets/technology/image-space-capsule-portrait.jpg";
import imgMobile from '../../../assets/technology/image-space-capsule-landscape.jpg';

export default function Technology_capsule() {
  return (
    <ContainerTechnology
      img={img}
      imgMobile={imgMobile}
      h1=" Space capsule"
      h3="The terminology..."
      description="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    />
  );
}
