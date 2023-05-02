import {useNavigate, useParams} from 'react-router-dom';
import {Path} from '../../common-const';
import {Helmet} from 'react-helmet-async';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectedFilm, selectedLoadStatusFilm} from '../../store/api-process/selectors';
import {useCallback, useEffect, useRef, useState} from 'react';
import {fetchFilmAction} from '../../store/async-actions';
import {LoadStatus} from '../../services/const';
import {Spinner} from '../../components/spiner/spinner';
import {Control} from '../../types/control';
import {VideoControl} from './const';
import {PauseButton} from '../../components/player/pause-button';
import {PlayButton} from '../../components/player/play-button';
import {calculatePercentage, formatRemainingTime} from './utils';
import {FullscreenDocument, FullscreenElement} from '../../interfaces/player';

function Player(): JSX.Element {
  const navigate = useNavigate();
  const {id} = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const film = useAppSelector(selectedFilm);
  const filmLoadStatus = useAppSelector(selectedLoadStatusFilm);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  const [playing, setPlaying] = useState<boolean>(true);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  const videoHandler = (control: Control) => {
    if (videoRef.current) {
      if (control === VideoControl.Play) {
        videoRef.current.play();
        setPlaying(true);
      } else if (control === VideoControl.Pause) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  };

  const handlerPlayButtonClick = useCallback(() => videoHandler(VideoControl.Play), []);
  const handlerPauseButtonClick = useCallback(() => videoHandler(VideoControl.Pause), []);

  useEffect(() => {
    if (!film && id) {
      dispatch(fetchFilmAction(id));
    }
    if (film && id) {
      videoHandler(VideoControl.Play);
    }
  }, [film, id, dispatch]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        setTimeRemaining(videoRef.current.duration - videoRef.current.currentTime);
      }
    };

    const currentVideoRef = videoRef.current;

    if (currentVideoRef) {
      currentVideoRef.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (currentVideoRef) {
        currentVideoRef.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      setTimeRemaining(videoRef.current.duration - videoRef.current.currentTime);
    }
  }, [film]);

  function toggleFullscreen(videoElement: FullscreenElement) {
    const fullscreenDocument = document as FullscreenDocument;
    if (!fullscreenDocument.fullscreenElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }
    } else {
      if (fullscreenDocument.exitFullscreen) {
        fullscreenDocument.exitFullscreen();
      } else if (fullscreenDocument.mozCancelFullScreen) {
        fullscreenDocument.mozCancelFullScreen();
      } else if (fullscreenDocument.webkitExitFullscreen) {
        fullscreenDocument.webkitExitFullscreen();
      } else if (fullscreenDocument.msExitFullscreen) {
        fullscreenDocument.msExitFullscreen();
      }
    }
  }

  function handleFullscreenButtonClick() {
    if (playerRef.current) {
      toggleFullscreen(playerRef.current);
    }
  }

  if (filmLoadStatus === LoadStatus.Loading) {
    return <Spinner/>;
  }

  const togglePosition = videoRef.current ? `${calculatePercentage(videoRef.current.currentTime, videoRef.current.duration)}%` : '0%';


  return (
    <div className="player" ref={playerRef}>
      <Helmet>
        <title>{film?.name ?? 'Film'} play</title>
      </Helmet>
      <video
        src={film?.videoLink}
        className="player__video"
        poster={film?.backgroundImage}
        ref={videoRef}
      >
      </video>
      <button
        type="button"
        className="player__exit"
        onClick={() => {
          navigate(`${Path.FilmsPages.MainPage.replace(':id', id as string)}`);
        }}
      >
        Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={videoRef.current ? videoRef.current.currentTime : 0} max={videoRef.current ? videoRef.current.duration : 100}></progress>
            <div className="player__toggler" style={{left: togglePosition}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeRemaining && formatRemainingTime(timeRemaining)}</div>
        </div>
        <div className="player__controls-row">
          {
            playing && (timeRemaining && timeRemaining > 0) ? <PauseButton handleButtonClick={handlerPauseButtonClick}/> : <PlayButton handleButtonClick={handlerPlayButtonClick}/>
          }
          <div className="player__name">{film?.name}</div>
          <button type="button" className="player__full-screen" onClick={handleFullscreenButtonClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
