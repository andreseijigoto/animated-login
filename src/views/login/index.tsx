import React, { useState, MouseEvent } from 'react';
import './styles.scss';

const Login = () => {

  const shapes = [];
  const [registerMode, setRegisterMode] = useState<Boolean>(false);

  function handleChoseChange() {
    setRegisterMode(!registerMode);
  };

  function handleClickMethod(evt: MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
  }

  for(let i = 1; i <= 7; i++) shapes.push(<div className={`shape-${i}`}/>);

  return (
    <div id="page-login">
      <div className={`swipe sign${registerMode ? "up" : "in"}-mode`}>
        <div className="swipe-container">
          <h1 className="title">{registerMode ? "One Of Us?" : "New Here?" }</h1>

          <p>
            {
              registerMode
                ? "If you already have an account, just sign in. We've missed you!"
                : "Sign up and discover a great amount of new opportunities!"
            }
          </p>

          <div className="tx-center">
            <button className="button rounded" onClick={() => handleChoseChange()}>Sign {registerMode ? "In" : "Up"}</button>
          </div>
        </div>

        <div className="figures">{shapes}</div>
      </div>

      <div className={`login ${registerMode ? "toggle-show" : ""}`}>
        <div className="content">
          <h1 className="title">Login to Your Account</h1>

          <form className="form">
            <div className="fieldset placeholder">
              <label className="label" htmlFor="username">Username</label>

              <input
                className="input rounded"
                id="username"
                name="username"
                placeholder="Username"
              />
            </div>

            <div className="fieldset placeholder">
              <label className="label" htmlFor="password-login">Password</label>

              <input
                className="input rounded"
                type="password"
                id="password-login"
                name="password"
                placeholder="Password"
              />
            </div>

            <div className="tx-center">
              <button className="button rounded" onClick={handleClickMethod}>Sign In</button>
            </div>
          </form>
        </div>
      </div>

      <div className={`register ${!registerMode ? "toggle-show" : ""}`}>
        <div className="content">
          <h1 className="title">Create Free Account</h1>
  
          <form className="form">
            <div className="fieldset placeholder">
              <label className="label" htmlFor="name">Name</label>

              <input
                className="input rounded"
                id="name"
                name="name"
                placeholder="Name"
              />
            </div>

            <div className="fieldset placeholder">
              <label className="label" htmlFor="email">E-mail</label>

              <input
                className="input rounded"
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
              />
            </div>

            <div className="fieldset placeholder">
              <label className="label" htmlFor="password">Password</label>

              <input
                className="input rounded"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <div className="fieldset placeholder">
              <label className="label" htmlFor="password-confirm">Password confirmation</label>
              <input
                className="input rounded"
                type="password"
                id="password-confirm"
                name="password-confirm"
                placeholder="Password confirmation"
              />
            </div>

            <div className="tx-center">
              <button className="button rounded" onClick={handleClickMethod}>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
