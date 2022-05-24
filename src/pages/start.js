import { Routes, Route, Link } from "react-router-dom";
import SelectBtn from "../components/button";
import Practical from "./practical";
import "../index.css";
const Start = () => {
    return (
      <section>
        <h2 className="text-4xl font-bold text-center pb-10">
          Select the Practical You Want to Carry Out
        </h2>
        <div className="grid lg:grid-cols-2 px-20 gap-5">
          <Link to="/get-started/practical" className="block">
            <SelectBtn title="Animals Used for Experimental Pharmacology" />
          </Link>
          <Link to="/get-started/practical" className="block">
            <SelectBtn title="Effect of AcetylCholine" className="block" />
          </Link>
        </div>
      </section>
    );
};
export default Start;
