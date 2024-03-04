import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <h1>Logo</h1>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/contacto">Contacto</Link>
            </div>
        </div>
    )
}