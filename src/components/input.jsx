import React from 'react'

const input = ({ HandleOnChange }) => {


    return (
        <div>
            <input type="text" onKeyDown={HandleOnChange} />
        </div>
    )
}

export default input