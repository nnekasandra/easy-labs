import { Link } from "react-router-dom"
const PageNotFound = () =>{
    return(
        <section className="bg-main-blue text-white text-center py-32">
            <h2 className="text-4xl py-20">404 Page Not found</h2>
            <p className="text-2xl">Go back <Link to="/" className="text-lightest-blue border-b-2 b">Home</Link></p>
        </section>
    )
}
export default PageNotFound;