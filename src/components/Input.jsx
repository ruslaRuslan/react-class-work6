import React, { useState } from 'react'

const Input = ({ }) => {
    const [txt, setTxt] = useState('')
    return (
        <>
            <p>{txt}</p>
            <input
                onChange={(e) => {
                    console.log(e.target.value);
                }}
                type="text" />

        </>
    )
}

export default Input;