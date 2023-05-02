type PauseButtonProps = {
  handleButtonClick: () => void;
}

export function PauseButton({handleButtonClick}: PauseButtonProps): JSX.Element {
  return (
    <button type="button" className="player__play" onClick={handleButtonClick}>
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use xlinkHref="#pause"></use>
      </svg>
      <span>Pause</span>
    </button>
  );
}
