import { Link } from "react-router"
import { logo } from "../constants"
import { useSelector } from "react-redux"

const Navbar = () => {
    const {loggedIn, user} = useSelector(state=>state.auth)
    return (
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
            <Link to={"/"} className="d-flex align-items-center text-decoration-none">
                <img src={logo} alt="" width={40} />
                <h4 className="ms-2 mt-1">SAMMI</h4>
            </Link>
            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                {loggedIn ? (
                    <>
                        <p className="me-3 py-2 m-0">{user.username}</p>
                        <button className="btn btn-outline-danger">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to={"/login"} className="me-3 py-2 link-body-emphasis text-decoration-none">Login</Link>
                        <Link to={"/register"} className="me-3 py-2 link-body-emphasis text-decoration-none">Register</Link>
                    </>
                )}
                
            </nav>
        </div>
    )
}

export default Navbar