import SelectBtn from "../components/button";
import "../index.css";
const Start = () => {
    return (
      <section>
        <h2>Select the Practical You Want to Carry Out</h2>
        <div>
            <SelectBtn title="Effect of Dopamine"/>
            <SelectBtn title="Effect of AcetylCholine"/>
        </div>
      </section>
    );
};
export default Start;
