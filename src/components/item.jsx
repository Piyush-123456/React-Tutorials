import React from 'react'

const item = (props) => {
    return (
        <li key={props.fooditems} >
            {props.fooditems}
        </li>
    )
}

export default item