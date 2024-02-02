import { useState } from "react";
import { Modal } from "../modal/Modal";
import { createPortal } from "react-dom";
import "./portal.css"


export default function PortalExample() {
    const [toggle, setToggle] = useState(false)

    return (
        <div className="portal_content">
            <button className="portal_btn" onClick={() => setToggle(true)}>
                Portal səhifəsi yaradın 
            </button>
            {toggle && createPortal(
                <Modal close={() => setToggle(false)} />,document.body
            )}
        </div>
    )
}