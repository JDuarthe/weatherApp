import Image from "next/image";
import { icons } from "../utils/watherIcons";

export const Card = ({ item }) => {
  return (
    <div className="col">
      <Image
        src={`http://openweathermap.org/img/wn/${
          icons[item.description.replace(/ /g, "_")]
        }@2x.png`}
        width={500}
        height={500}
        alt="Weather Picture"
      />
      <p className="text-center">
        {item.maxTemp}°/{item.minTemp}°
      </p>
      <p className="text-center">{item.description}</p>
      <p className="text-center">{item.date}</p>
    </div>
  );
};
