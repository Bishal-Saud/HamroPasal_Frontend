import { Carousel } from "@material-tailwind/react";
import dressImage from "../assets/HamroPhotos/dressImage.png";
import fashionWare from "../assets/HamroPhotos/fashion.png";
import eatFood from "../assets/HamroPhotos/eatFood.png";
export default function CarouselForHomePage() {
  return (
    <Carousel className="rounded-xl">
      <img
        src={dressImage}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img src={eatFood} alt="image 2" className="h-full w-full object-cover" />
      <img
        src={fashionWare}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
