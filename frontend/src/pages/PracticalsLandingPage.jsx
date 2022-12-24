import { Link } from "react-router-dom"
import Profile from "../components/Profile"
import Button from "../components/Button"
import LogoutButton from "../components/LogoutButton"
const PracticalsLandingPage = () =>{
    return (
      <section className="grid  md:grid-cols-3 gap-10 p-10 md:p-20">
        <div className="border rounded-xl p-5 profiles">
          <Profile />
          <LogoutButton />
        </div>
        <div className="col-span-2">
          <p className="font-bold text-2xl py-10">
            Select the experiment you want to carry out.
          </p>
          <div>
            <input
              type="search"
              name="search"
              placeholder="Search experiments"
              className="border-2 w-full p-3 text-sm rounded-lg"
            />
            <div className="grid md:grid-cols-2 py-10 gap-5">
              <Link to={"/practicals/dose-response"}><Button field="Dose Response in Acetycholine"/></Link>
              <Link to={"/practicals/2"}><Button field="Practical2"/></Link>
            </div>
          </div>
        </div>
      </section>
    );
}
export default PracticalsLandingPage;