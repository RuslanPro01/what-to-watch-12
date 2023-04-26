import React, {useEffect, useRef, useState} from 'react';
import './loading.css';

export function Spinner(): JSX.Element {
  const [fontSize, setFontSize] = useState<string>('1em');
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateFontSize = () => {
      if (spinnerRef.current && spinnerRef.current.parentElement) {
        const parent = spinnerRef.current.parentElement;
        setFontSize(`${Math.round(parent.clientHeight * 0.6)}px`);
      }
    };

    updateFontSize();
    window.addEventListener('resize', updateFontSize);
    return () => {
      window.removeEventListener('resize', updateFontSize);
    };
  }, []);

  return (
    <div className="spinner-container" ref={spinnerRef}>
      <p className="spinner" style={{ fontSize }}>L</p>
      <p className="spinner" style={{ fontSize }}>o</p>
      <p className="spinner" style={{ fontSize }}>a</p>
      <p className="spinner" style={{ fontSize }}>d</p>
      <p className="spinner" style={{ fontSize }}>i</p>
      <p className="spinner" style={{ fontSize }}>n</p>
      <p className="spinner" style={{ fontSize }}>g</p>
      <p className="spinner" style={{ fontSize }}>.</p>
      <p className="spinner" style={{ fontSize }}>.</p>
      <p className="spinner" style={{ fontSize }}>.</p>
    </div>
  );
}
