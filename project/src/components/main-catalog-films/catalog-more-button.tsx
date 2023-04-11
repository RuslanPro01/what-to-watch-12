type CatalogMoreButtonProps = {
  isButtonVisible: boolean;
  handleButtonClick: () => void;
}

export function CatalogMoreButton({isButtonVisible, handleButtonClick}: CatalogMoreButtonProps): JSX.Element | null {
  if (isButtonVisible) {
    return (
      <div className="catalog__more">
        <button
          className="catalog__button"
          type="button"
          onClick={handleButtonClick}
        >
          Show more
        </button>
      </div>
    );
  }
  return null;
}
