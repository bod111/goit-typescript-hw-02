import { MouseEvent } from "react";
import Modal from "react-modal";
import { PictureData } from "../../types";
import css from "./ImageModal.module.css";

Modal.setAppElement("#modal");

interface ImageModalProps {
  onClose: (e: MouseEvent<HTMLDivElement>) => void;
  modalIsOpen: boolean;
  card: PictureData | null ;
}

export default function ImageModal({
  onClose,
  modalIsOpen,
  card,
}: ImageModalProps) {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={onClose}>
      <div className={css.overlay} onClick={onClose}>
        {card && (<figure className={css.modal}>
          <img className={css.pic} src={card.urls.regular} alt={card.alt_description} />
          <figcaption className={css.descriptionBlock}>
            <p className={css.description}>{card.description || card.alt_description}</p>
            <p>
              author <span className={css.text}> {card.user.name}</span> from
              <span className={css.text}> {card.user.location}</span>
            </p>
            <p>
              Likes: <span className={css.text}>{card.likes}</span>
            </p>
          </figcaption>
        </figure>)}
        
      </div>
    </Modal>
  );
}
