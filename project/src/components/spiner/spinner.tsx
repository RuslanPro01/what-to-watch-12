import './loading.css';

export function Spinner(): JSX.Element {
  return (
    <div className='spinner-container'>
      <p className="spinner">L</p>
      <p className="spinner">o</p>
      <p className="spinner">a</p>
      <p className="spinner">d</p>
      <p className="spinner">i</p>
      <p className="spinner">n</p>
      <p className="spinner">g</p>
      <p className="spinner">.</p>
      <p className="spinner">.</p>
      <p className="spinner">.</p>
    </div>
  );
}
