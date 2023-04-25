type SignInMessageProps = {
  massage: string | unknown;
}

export function SignInMessage({massage}: SignInMessageProps): JSX.Element {
  return (
    <div className="sign-in__message">
      <p>{typeof massage === 'string' ? massage : ''}</p>
    </div>
  );
}
