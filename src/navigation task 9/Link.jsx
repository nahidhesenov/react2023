import { Link } from "react-router-dom";
import "./styleLink.css"

export default function Links() {
    return (
        <div className="container">
            <Link className="link" to="/about" >About</Link>
            <Link className="link" to="/contact" >Contact</Link>
            <Link className="link" to="/dashboard" >Dashboard</Link>
            <Link className="link" to="/products" >Products</Link>
        </div>
    )
} 