import React, { useState } from 'react'

const Input = ({ }) => {
    const [txt, setTxt] = useState('')
    return (
        <>
            <p>{txt.toUpperCase()}</p>
            <input
                onChange={(e) => {
                    setTxt(e.target.value);
                }}
                type="text" />

        </>
    )
}
export default Input;