import { Link } from "react-router-dom";
import SelectBtn from "../components/button";
import "../index.css";
const Start = () => {
    return (
      <section>
        <h2 className="text-4xl font-bold text-center pb-10">
          Select the Practical You Want to Carry Out
        </h2>
        <div className="grid lg:grid-cols-2 px-20 gap-5">
          <Link to="/get-started/practical" className="block">
            <SelectBtn title="Dose Responsive Curve of Acetylcholine on Rectus
          Abdominal Muscle of Frog" />
          </Link>
          <Link to="/get-started/practical" className="block">
            <SelectBtn title="Animals used in practical" className="block" />
          </Link>
        </div>
      </section>
    );
};
export default Start;
