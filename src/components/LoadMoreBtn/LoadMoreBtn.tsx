import css from "./LoadMoreBtn.module.css";

interface SerchBarProps {
  onClickLoadMoreBtn: () => void;
}

export default function LoadMoreBtn({ onClickLoadMoreBtn }: SerchBarProps) {
  return (
    <div>
      <button className={css.btn} type="button" onClick={onClickLoadMoreBtn}>
        Load more
      </button>
    </div>
  );
}
