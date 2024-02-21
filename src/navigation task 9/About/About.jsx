import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../Loading"
const url = "https://fakestoreapi.com/users"

export default function About() {
    const [about, setAbout] = useState([])

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            setAbout(data)
        })
    }, [])
    return (
        <>
            <div className="container" style={{ height: '70vh' }}>
                <h1>About</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px 15px' }}>
                    {
                        about.map(({ id, username, email, password }) => {
                            return <div className="cart" key={id} style={{ width: '20%', display: 'flex', justifyContent: 'center' }}>
                                <div>
                                    <p>Username({id}): {username}</p>
                                    <p>Email: {email}</p>
                                    <p>Password: {password}</p>

                                </div>
                            </div>
                        })
                    }
                </div >
            </div>
        </>
    )


}