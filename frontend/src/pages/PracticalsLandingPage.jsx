import { Link } from "react-router-dom"
import Profile from "../components/Profile"
import LogoutButton from "../components/LogoutButton"
const PracticalsLandingPage = () =>{
    return(
        <section className="grid grid-cols-2 md:grid-cols-3 gap-10 p-10 md:p-20">
            <div className="border p-3">
                <Profile/>
                <LogoutButton/>
            </div>
            <div className="col-span-2">
                <p className="font-bold text-2xl py-10">Select the experiment you want to carry out.</p>
                <div>
                    <input type="search" name="search" placeholder="Search experiments" className="border-2 w-full p-3 text-sm rounded-lg"/>
                    <div className="grid md:grid-cols-2 py-10">
                        <Link to={"/practicals/1"}>Practical1</Link>
                        <Link to={"/practicals/2"}>Practical2</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PracticalsLandingPage;