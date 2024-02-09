import "./link.css";
import { Link } from "react-router-dom";

export default function Linked() {
    return (
        <div>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={'/dashboard'}>Dashboard</Link>
                <Link to={"/product"}>Products</Link>
            </nav>
        </div>
    )

}