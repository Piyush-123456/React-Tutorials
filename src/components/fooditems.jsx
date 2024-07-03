import React from 'react'
import Items from './items'
const fooditems = ({ items, HandleOnChange }) => {
    return (
        <ul className='list-group '>
            {items.map((elem) => (
                <Items elem={elem}  ></Items>
            ))}
        </ul>
    )
}

export default fooditems