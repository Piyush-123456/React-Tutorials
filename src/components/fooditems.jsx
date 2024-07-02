import React from 'react'
import Items from './items'
const fooditems = (props) => {
    return (
        <ul className='list-group '>
            {props.items.map((elem) => (
                <Items items={elem}></Items>
            ))}
        </ul>
    )
}

export default fooditems