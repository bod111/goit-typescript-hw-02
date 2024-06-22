import { MouseEvent, useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { getPhotosByQuery } from "../../service/api";
import {PictureData} from "../../types"
import "./App.css";

function App() {
  const [pictures, setPictures] = useState<PictureData[]>([]);
  const [allPages, setAllPages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [topic, setTopic] = useState<string>("");
  const [modal, setModal] = useState<PictureData | null>(null);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchPhotos()  {
      try {
        setLoading(true);
        const data = await getPhotosByQuery(topic, page);
        setPictures((prevPictures) => [...prevPictures, ...data.results]);
        setAllPages(data.total_pages);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, [topic, page]);

  useEffect(() => {
    modal !== null && setIsOpen(true);
  }, [modal]);

  const onSubmitForm = (nameOnForm: string) => {
    setTopic(nameOnForm);
    setPage(1);
    setPictures([]);
    setAllPages(1);
  };

  const onClickLoadMoreBtn = () => {
    setPage((prev) => prev + 1);
  };

  const handleClick = (card: PictureData) => setModal(card);

  const onClose = (e: MouseEvent<HTMLDivElement>) => {
    e.target === e.currentTarget && (setIsOpen(false), setModal(null));
  };

  return (
    <>
      <SearchBar onSubmit={onSubmitForm} />
      {!!pictures.length && (
        <>
          <ImageGallery
            handleClick={handleClick}
            pictures={pictures}
          />
          {allPages > page && (
            <LoadMoreBtn onClickLoadMoreBtn={onClickLoadMoreBtn} />
          )}
        </>
      )}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {modalIsOpen && (
        <ImageModal onClose={onClose} card={modal} modalIsOpen={modalIsOpen} />
      )}
    </>
  );
}

export default App;
