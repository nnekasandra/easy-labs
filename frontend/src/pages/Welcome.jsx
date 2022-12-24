import Button from "../components/Button";
import { Link } from "react-router-dom";
import "./style.css";
const Welcome = () => {
  return (
    <section className="welcome-page flex flex-col items-center gap-10 justify-center text-center px-10">
      <h1 className="text-white font-bold text-3xl md:text-4xl">
        Welcome to Easy-labs
      </h1>
      <p className="text-white font-bold text-2xl md:text-3xl">
        Your One Straight Forward Process of Analysing Experiment Results
      </p>
      <div>
        <Link to={"/practicals"} target={"_blank"} rel="noopener noreferrer">
          <Button field="Go to Practicals" />
        </Link>
      </div>
    </section>
  );
};
export default Welcome;
