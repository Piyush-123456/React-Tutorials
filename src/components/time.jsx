import React from 'react'

const time = () => {
    let time = new Date();
    return (
        <div>
            <h1>
                {time.toLocaleDateString() +" "+ time.toLocaleTimeString()}
            </h1>
        </div>
    )
}

export default time