import { Link } from "react-router-dom";
import SelectBtn from "../components/button";
import "../index.css";
import { SignUp } from "./signup";
const Start = () => {
    return (
      <section>
        <SignUp/>
      </section>
    );
};
export default Start;
{
  /* <h2 className="text-4xl font-bold text-center pb-10">
          Select the Practical You Want to Carry Out
        </h2>
        <div className="grid lg:grid-cols-2 px-20 gap-5">
          <Link to="/get-started/practical-1" className="block">
            <SelectBtn
              title="Dose Responsive Curve of Acetylcholine on Rectus
          Abdominal Muscle of Frog"
            />
          </Link>
          <Link to="/get-started/practical-2">
            <SelectBtn
              title="Animals used in practical"
              className="w-full h-20"
            />
          </Link> 
        </div> */
}