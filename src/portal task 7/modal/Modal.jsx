import "./modal.css"
import React, { useState, useEffect } from 'react';


export function Modal({ close }) {
    const [counter, setCounter] = useState(15);

    useEffect(() => {

        const intervalId = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
        }, 1000);


        return () => {
            clearInterval(intervalId);
        };
    }, [counter]);


    if (counter === 0) {
        close()
    }
    return (
        <div className="modal" style={{display:'flex',flexDirection:'column'}}>
            <h4>Səhifə 15 saniyə ərzində bağlanacaq</h4>
            <h1>{counter}</h1>
            <button className="button_close" onClick={() => close()}>Close</button>
        </div>
    )
}