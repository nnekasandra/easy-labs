import { Link } from "react-router-dom";
import "./style.css";
export const SignUp = () => {
  const create = document.querySelector("#createAccount");
  function setFormMessage(type, message) {
    const messageElement = document.querySelector(".message");
    messageElement.textContent = message;
    messageElement.classList.remove("error-message", "success-message");
    messageElement.classList.add(`${type}-message`);
  }
  function setInputError(inputElement, message) {
    inputElement.classList.add("form-input-error");
    inputElement.parentElement.querySelector("error-messages").textContent =
      message;
  }
  create.addEventListener("submit", (e) => {
    e.preventDefault();
    //ajaxfetchlogin
    setFormMessage("error", "invalid email");
  });
  document.querySelectorAll(".form-input").forEach((inputElement) => {
      inputElement.addEventListener("blur", (e) => {
        if (
          e.target.id === "username" &&
          e.target.value.length > 0 &&
          e.target.value.length < 10
        ) {
          setInputError(
            inputElement,
            "Username must be at least 10 characters in length"
          );
        }
      });
    });

  return (
    <section className="lg:px-44 px-20 py-10">
      <h1 className="text-2xl text-center py-5">Create Account </h1>
      <form className="border px-5 py-10 forms" id="createAccount">
        <div className="message error-message"></div>
        <div className="form-inputs">
          <div className="input-group">
            <input
              type={"text"}
              className="form-input w-full p-3 border-2 border-blue my-5 focus:border-lightest"
              placeholder="username"
              autoFocus
              id="username"
              required
            />
            <div className="form-message error-messages"></div>
          </div>
          <div className="input-group">
            <input
              type={"email"}
              className="form-input w-full p-3 border-2 border-blue my-5"
              autofocus
              placeholder="Email"
              required
            />
            <div className="form-message error-messages"></div>
          </div>
          <div className="input-group">
            <input
              type={"password"}
              className="form-input w-full p-3 border-2 border-blue my-5"
              placeholder="Password"
              required
            />
            <div className="form-message error-messages"></div>
          </div>
          <div className="input-group">
            <input
              type={"password"}
              className="form-input  w-full p-3 border-2 border-blue my-5"
              placeholder="Confirm Password"
              required
            />
            <div className="form-message error-messages"></div>
          </div>
        </div>
        <button
          className="font-bold w-full p-5 bg-light-blue text-3xl hover:bg-main-blue hover:text-white transition mt-5"
          type="submit"
        >
          Create Account
        </button>
        <p class="form-text text-xl text-center py-5">
          <Link
            to="/get-started/sign-in"
            id="linkLogin"
            className="hover:underline hover:text-blue font-bold"
          >
            Already have an account? Sign in
          </Link>
        </p>
      </form>
    </section>
  );
};
