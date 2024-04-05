import React, { useState } from 'react'

const Input = ({ }) => {
    const [txt, setTxt] = useState('')
    return (
        <>
            <p>{txt}</p>
            <input
                onChange={(e) => {
                    setTxt(e.target.value.toUpperCase());
                }}
                type="text" />
            <button onClick={() => {
                console.log(txt);
            }}
            >click</button>

        </>
    )
}
export default Input;