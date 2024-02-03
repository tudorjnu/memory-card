import { useEffect, useState } from "react";
import "./App.scss";
import { getImages, getDummyImages } from "./lib/actions";

function Images({ round }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(() => getDummyImages());
    return () => {
      setImages([]);
    };
  }, [round]);

  return (
    <ul
      style={{
        listStyleType: "none",
        paddingLeft: "0",
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(50px, 100px))",
      }}
    >
      {images.map((image) => {
        return <li key={image.code}>{image.emoji}</li>;
      })}
    </ul>
  );
}

export default Images;
