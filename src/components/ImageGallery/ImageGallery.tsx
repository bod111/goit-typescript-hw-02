
import { PictureData } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  pictures: PictureData[];
  handleClick: (card: PictureData) => void;
}

export default function ImageGallery({ pictures, handleClick }: ImageGalleryProps) {
  return (
    <ul className={css.gallary}>
      {pictures &&
        pictures.map((pict) => {
          return (
            <li key={pict.id}>
              <ImageCard card={pict} handleClick={handleClick} />
            </li>
          );
        })}
    </ul>
  );
}
