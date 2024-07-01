import React from 'react'
import Item from './item'
const foodItems = (props) => {
    return (
        <div>
            <ul>{
                props.lovefood.map((elem) =>
                    <Item fooditems={elem}></Item>
                )}
            </ul>
        </div>
    )
}

export default foodItems