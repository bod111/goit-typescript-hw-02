import { PictureData } from "../../types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  card: PictureData;
  handleClick: (card: PictureData) => void;
}

export default function ImageCard({ card, handleClick }: ImageCardProps) {
  return (
    <div>
      <img
        className={css.image}
        src={card.urls.small}
        onClick={() => {
          handleClick(card);
        }}
      />
    </div>
  );
}
