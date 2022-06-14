import { Link } from "react-router-dom";
export const SignIn = ()=>{
    return (
      <section>
        <h2>Sign In to Access EasyLabs</h2>
        <form>
          <div className="message error-message"></div>
          <div className="form-inputs">
            <div className="input-group">
              <input
                type={"email"}
                className="form-input"
                placeholder="Email"
              />
              <div className="form-message error-message"></div>
            </div>
            <div className="input-group">
              <input
                type={"password"}
                className="form-input"
                placeholder="password"
              />
              <div className="form-message error-message"></div>
            </div>
          </div>
          <button class="form__button" type="submit">
            Continue
          </button>
          <p class="form__text">
            <a href="#" class="form__link">
              Forgot your password?
            </a>
          </p>
          <p class="form__text">
            <Link class="form__link" to="sign-up" id="linkCreateAccount">
              Don't have an account? Create account
            </Link>
          </p>
        </form>
      </section>
    );
}