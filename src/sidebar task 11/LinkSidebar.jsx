import { Link } from "react-router-dom";
import "./linkSidebarStyle.css"

export default function LinkSidebar() {
    return (
        <div style={{height:'20vh'}} className="container">
            <Link className="link2" to="/sidebar" >Sidebar</Link>
            <Link className="link2" to="/main" >Main</Link>
        </div>
    )
} 