import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <nav className="Navbar">

            <h3 className="Brand">
                Online Library
            </h3>

            <div className="Nav_links">

                <Link to="/">
                    Home
                </Link>

                <Link to="/books">
                    Browse Books
                </Link>

                <Link to="/add-book">
                    Add Book
                </Link>

            </div>

        </nav>
    );
}

export default Header;