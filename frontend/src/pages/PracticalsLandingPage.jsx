import { Link } from "react-router-dom"
import Profile from "../components/Profile"
import LogoutButton from "../components/LogoutButton"
const PracticalsLandingPage = () =>{
    return(
        <section className="flex justify-around gap-10 p-10 md:p-20">
            <div>
                <Profile/>
                <LogoutButton/>
            </div>
            <div>
                <p>Select the experiment you want to carry out.</p>
                <div>
                    <input type="search" name="search" placeholder="Search experiments" className="border-2 p-3 text-sm rounded-lg"/>
                    <div className="grid md:grid-cols-2">
                        <Link to={"/practicals/1"}>Practical1</Link>
                        <Link to={"/practicals/2"}>Practical2</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PracticalsLandingPage;