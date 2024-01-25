import { useState } from 'react'
import './drop.css'


export default function Dropdown() {
    let options = ['blue', 'green', 'red', 'yellow']
    const [current, setCurrent] = useState(null)
    const [toggle, setToggle] = useState(false)
    return (
        <>
        <div className='dropContent'>
            <div className='select' onClick={() => setToggle((prev) => prev = !prev)}>
                <p className='header'>{current ?? "Select color"}</p>
            </div>
            <div className='option' style={{ display: (toggle ? "block" : 'none') }}>
                {options.map(el => <p onClick={() => { setCurrent(el), setToggle((prev) => prev = !prev) }}>{el}</p>)}
            </div>
        </div>
        </>
    )
}