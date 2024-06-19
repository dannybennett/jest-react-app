import { useState, useEffect } from "react";
import waitSvg from "../assets/3-dots-scale.svg";
import IImage from "../types/image.type.ts";
import fetchImage from "../services/image.service.ts";
import "../App.css";

function RandomImages() {
  const [image, setImage] = useState<IImage>({
    file: waitSvg,
    class: "tiny",
  });

  useEffect(() => {
    const getImage = async () => {
      const path = await fetchImage();
      setImage({ file: path.file, class: "portrait" });
    };

    getImage();
  }, []);

  return (
    <>
      <h4>Random Coffee Image</h4>
      <div>
        <img src={image.file ?? ""} className={image.class ?? ""} />
      </div>
    </>
  );
}

export default RandomImages;
