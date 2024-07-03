import React from 'react'

const input = ({HandleOnChange}) => {


    return (
        <div>
            <input type="text" onChange={HandleOnChange} />
        </div>
    )
}

export default input