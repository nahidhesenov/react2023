
import { useState, useEffect } from "react"
import "./accordion.css";

export default function Accordion() {

    const [state, setState] = useState({ users: [], userID: null })

    useEffect(() => {
        downloadData()
        return
    }, [])

    function removeElement(id) {
        setState((prev) => ({ ...prev, userID: id }))
    }
    async function downloadData() {

        const data = await fetch("https://fakestoreapi.com/users")
        const response = await data.json()
        setState((prev) => ({ ...prev, users: response }))

    }

    return (
        <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>

            {state.users.map((el) => {
                return (
                    <div className="content">
                        <div className="cart" key={el.id} onClick={() => removeElement(el.id)}>
                            <p className="text"><span>{el.id}</span>.{el.email}</p>
                        </div>
                        {el.id == state.userID ? <p className="textMini">Name: {el.username}</p> : null}
                    </div>
                )


            })}

        </div>
    )

}