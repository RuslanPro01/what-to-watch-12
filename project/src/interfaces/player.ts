export interface FullscreenElement extends HTMLElement {
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
  msRequestFullscreen?: () => void;
}

export interface FullscreenDocument extends Document {
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
  msExitFullscreen?: () => void;
}
