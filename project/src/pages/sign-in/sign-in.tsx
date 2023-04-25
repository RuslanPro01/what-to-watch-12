import Footer from '../../components/footer/footer';
import Logo from '../../components/header/logo';
import {Helmet} from 'react-helmet-async';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {loginAction} from '../../store/async-actions';
import {AuthUserData} from '../../types/user';
import {store} from '../../store';
import {toast} from 'react-toastify';
import {useAppSelector} from '../../hooks';
import {selectedAuthorizationError, selectedAuthStatus} from '../../store/selectors';
import {useNavigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../components/private-route/const';
import {Path} from '../../common-const';
import {SignInMessage} from './sign-in-message';

function SignIn(): JSX.Element {
  const [emailInputValue, setEmailInputValue] = useState<string>('');
  const [passwordInputValue, setPasswordInputValue] = useState<string>('');
  const [errorLogin, setErrorLogin] = useState<string | null | unknown>(null);
  const authStatus = useAppSelector(selectedAuthStatus);
  const navigate = useNavigate();
  const authorizationError = useAppSelector(selectedAuthorizationError);

  useEffect(() => {
    setErrorLogin(authorizationError);
  }, [authorizationError]);

  if (authStatus === AuthorizationStatus.Auth) {
    navigate(Path.MainPage.initial);
  }
  const onSubmit = (authData: AuthUserData) => {
    store.dispatch(loginAction(authData));
  };
  const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      setEmailInputValue(event.target.value);
    }
  };

  const handlePasswordInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      setPasswordInputValue(event.target.value);
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const regexpCheckPassword = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    const regexpCheckEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regexpCheckEmail.test(emailInputValue) && regexpCheckPassword.test(passwordInputValue)) {
      onSubmit({
        email: emailInputValue,
        password: passwordInputValue,
      });
    } else {
      toast.warn('Incorrect email or password, please, try again.');
    }
  };


  return (
    <div className="user-page">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {
            errorLogin ? <SignInMessage massage={errorLogin}/> : null
          }
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input"
                required
                minLength={4}
                type="email"
                placeholder="Email address"
                value={emailInputValue}
                name="user-email"
                id="user-email"
                onChange={handleEmailInputChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input"
                required
                minLength={2}
                value={passwordInputValue}
                onChange={handlePasswordInputChange}
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default SignIn;
