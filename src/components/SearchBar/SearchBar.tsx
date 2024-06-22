import { FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoSearch } from "react-icons/io5";
import { IconContext } from "react-icons";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (topic: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const topic = form.elements.namedItem("topic") as HTMLInputElement;
    !topic.value.trim() ? notify() : onSubmit(topic.value);
    form.reset();
  };

  const notify = () => toast.error("enter a search term!");
  return (
    <header>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="topic"
        />
        <button className={css.btn} type="submit">
          <IconContext.Provider value={{ size: "30px" }}>
            <IoSearch />
          </IconContext.Provider>
        </button>
        <Toaster />
      </form>
    </header>
  );
}
