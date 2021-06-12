import { Link } from "react-router-dom";
import { Home, Search } from "@material-ui/icons";

function NavBar() {
    return (
        <div className="navbar">
            <Link to="/" className="navbar__link"><Home /></Link>
            <Link to="/search" className="navbar__link" ><Search /></Link>
        </div>
    )
}

export default NavBar
