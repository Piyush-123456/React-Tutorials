import React from 'react'

const input = () => {
    const onChangeHandler = (event) => {
        console.log(event.target.value);
    }

    return (
        <div>
            <input type="text" onChange={onChangeHandler} />
        </div>
    )
}

export default input