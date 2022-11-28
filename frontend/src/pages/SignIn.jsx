import { Link } from "react-router-dom";
export const SignIn = ()=>{
    return (
      <section className="lg:px-44 px-20 py-20">
        <h2 className="text-2xl text-center py-5">
          Sign In to Access EasyLabs
        </h2>
        <form className="border px-20 py-10 forms">
          <div className="message error-message"></div>
          <div className="form-inputs">
            <div className="input-group">
              <input
                type={"email"}
                className="form-input w-full p-3 border-2 border-blue my-5 focus:border-lightest"
                placeholder="Email"
                autoFocus
              />
              <div className="form-message error-message"></div>
            </div>
            <div className="input-group">
              <input
                type={"password"}
                className="form-input w-full p-3 border-2 border-blue my-5"
                placeholder="password"
              />
              <div className="form-message error-message"></div>
            </div>
          </div>
          <button
            className="font-bold w-full p-5 bg-light-blue text-3xl hover:bg-main-blue hover:text-white transition mt-5"
            type="submit"
          >
            Continue
          </button>
          <p className="text-center text-xl py-5">
            Forgot your
            <a
              href="#"
              className="form__link hover:underline hover:text-blue font-bold"
            >
              &nbsp;password?
            </a>
          </p>
          <p className="form__text text-xl text-center">
            Don't have an account?
            <Link
              className="hover:underline hover:text-blue font-bold"
              to="/get-started/sign-up"
              id="linkCreateAccount"
            >
              &nbsp;Create account
            </Link>
          </p>
        </form>
      </section>
    );
}