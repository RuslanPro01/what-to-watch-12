type PlayButtonProps = {
  handleButtonClick: () => void;
}

export function PlayButton({handleButtonClick}: PlayButtonProps): JSX.Element {
  return (
    <button type="button" className="player__play" onClick={handleButtonClick}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}
