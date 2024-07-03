import React from 'react'

const items = ({ elem }) => {
    return (
        <li className='list-group-item' key={elem}>
            {elem}
            <button type="submit" className='btn btn-success float-end' >
                Buy
            </button>
        </li>
    )
}

export default items