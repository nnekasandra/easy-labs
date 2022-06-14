import { Link } from "react-router-dom";
import "./style.css";
export const SignUp = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const loginForm = document.querySelector('#login');
        const createForm = document.querySelector('#createAccount');
        document.querySelector("#linkCreateAccount").addEventListener('click', e =>{
            e.preventDefault()
            loginForm.classList.add('form--hidden');
            createForm.classList.remove('form--hidden');
        });
        document.querySelector("#linkLogin").addEventListener('click', e =>{
            e.preventDefault()
            loginForm.classList.remove('form--hidden');
            createForm.classList.add('form--hidden');
        });
    })
  return (
    <section>
      <form>
        <h1>Create Account </h1>
        <div className="message error-message"></div>
        <div className="form-inputs">
          <div className="input-group">
            <input
              type={"text"}
              className="form-input"
              placeholder="username"
            />
            <div className="form-message error-message"></div>
          </div>
          <div className="input-group">
            <input
              type={"email"}
              className="form__input"
              autofocus
              placeholder="Email"
            />
            <div className="form-message error-message"></div>
          </div>
          <div className="input-group">
            <input
              type={"password"}
              className="form-input password"
              placeholder="Password"
            />
            <div className="form-message error-message"></div>
          </div>
          <div className="input-group">
            <input
              type={"password"}
              className="form-input password"
              placeholder="Confirm Password"
            />
            <div className="form-message error-message"></div>
          </div>
        </div>
        <button class="form__button" type="submit">
          Continue
        </button>
        <p class="form__text">
          <Link class="form__link" to="sign-in" id="linkLogin">
            Already have an account? Sign in
          </Link>
        </p>
      </form>
    </section>
  );
};