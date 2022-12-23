import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useForm, ValidationError } from "@formspree/react";
import LoginButton from "./LoginButton";
const Home = () => {
  const [state, handleSubmit] = useForm("xlezalvv");
  if (state.succeeded) {
    return <p>Your Message was well received!</p>;
  }
  return (
    <div>
      <section className="about text-white px-20 py-10" id="about">
        <h2 className="lg:text-6xl text-4xl py-10 ">
          Carry Out Lab Experiments Seamlessly
        </h2>
        <p className="text-lg">Laboratory Processes now at Your FingerTips</p>
      </section>
      <section className="grid md:grid-cols-2 gap-10 pt-20 md:px-20 px-10 grid-rows-1">
        <div>
          <img
            src="images/about-img.jpg"
            alt="Laboratory Attendant Using a Microscope"
          />
        </div>
        <div>
          <h2 className="text-light-blue font-bold text-2xl border-b-4 border-b-main-blue mb-2">
            About EasyLabs
          </h2>
          <p className="text-3xl font-bold text-main-blue py-5">
            EasyLabs helps you easily carry out laboratory processes faster with
            concrete result analytics.
          </p>
          <div className="flex gap-2">
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="h-4 w-4 p-2 mt-1 border rounded-full flex items-center justify-center bg-lighter-blue"
            />
            <p className="text-lg leading-8">
              EasyLabs is a platform which helps students as well as tutors
              carry out laboratory practicals effectively by providing step by
              step processes of carrying out every practical.
            </p>
          </div>
          <div className="flex gap-2 py-5">
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="h-4 w-4 p-2 mt-1 border rounded-full flex items-center justify-center bg-lighter-blue"
            />
            <p className="text-lg leading-8">
              It solves the problem of doing laboratory works without the
              presence of a lab attendant. A newbie can totally carry out the
              practical by just following the steps provided by this software.
            </p>
          </div>
          <div className="flex gap-2">
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="h-4 w-4 p-2 mt-1 border rounded-full flex items-center justify-center bg-lighter-blue"
            />
            <p className="text-lg leading-8">
              Obtain Accurate Results and Practical Observations. Results can be
              evaluated and Analysed via the Platform
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center font-bold text-2xl md:text-4xl py-10 text-blue">
          Steps to Get Started
        </h2>
        <div className="grid md:grid-cols-3 gap-10 steps mt-10 px-20 md:px-30">
          <div className="border rounded-xl step-box p-10 relative flex items-center justify-center h-44">
            <p className="h-10 w-10 border rounded-full flex items-center justify-center text-xl absolute number bg-blue text-white text-lg font-bold">
              1
            </p>
            <p className="text-xl text-blue text-center">
              Signup by Clicking Get Started Button
            </p>
          </div>
          <div className="border rounded-xl step-box p-10 relative flex items-center justify-center h-44">
            <p className="h-10 w-10 border rounded-full flex items-center justify-center text-xl absolute number bg-blue text-white text-lg font-bold">
              2
            </p>
            <p className="text-xl text-blue text-center">
              Select the Practical You Want to Carry Out
            </p>
          </div>
          <div className="border rounded-xl step-box relative flex items-center justify-center h-44">
            <p className="h-10 w-10 border rounded-full flex items-center justify-center text-xl absolute number bg-blue text-white text-lg font-bold">
              3
            </p>
            <p className="text-xl text-blue text-center py-20 px-10">
              Follow Procedures and Obtain Results
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button className="border rounded-full p-6 hover:p-7 cta text-white bg-main-blue hover:bg-blue font-bold text-2xl h-10 flex items-center justify-center">
            <LoginButton name="Get Started" />
          </button>
        </div>
      </section>
      <section
        id="contact"
        className="grid md:grid-cols-2 gap-10 pt-20 md:px-20 px-10"
      >
        <div>
          <img src="images/contact.jpg" alt="Laboratory" />
        </div>
        <div>
          <h2 className="text-light-blue font-bold text-2xl border-b-4 border-b-main-blue mb-2">
            Contact Us
          </h2>
          <h3 className="text-3xl font-bold text-main-blue py-5 ">
            For Collaborations and Enquiries you can Reach Out Via this Form
          </h3>
          <form onSubmit={handleSubmit}>
            <label for="name">Name</label>
            <input
              type={"text"}
              id="name"
              className="border p-4 w-full block my-3"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label for="email">Email</label>
            <input
              type={"email"}
              id="email"
              className="border p-4 w-full block my-3"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label for="Message">Your Message</label>
            <textarea
              placeholder="Enter Your Message..."
              className="border p-4 w-full block my-3"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-main-blue hover:bg-blue text-white font-bold border rounded p-5 my-6 text-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Home;
