import React from 'react'

const items = (props) => {
    return (
        <li className='list-group-item' key={props.items}>
            {props.items}
            <button type="submit" className='btn btn-success float-end' >
                Buy
            </button>
        </li>
    )
}

export default items