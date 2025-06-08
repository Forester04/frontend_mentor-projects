import React from "react"
import iconDecrement from "/assets/images/icon-decrement-quantity.svg"
import iconIncrement from "/assets/images/icon-increment-quantity.svg"

import '/src/App'

export default function CartValue({ handleAdd, handleSub, number, handleRemove, className}) {
   

    return (
        <span onClick={handleRemove} className={className}>
            <span  
            onClick={(e) => {
                e.stopPropagation();
                handleAdd();
            }}
            style={{background: "gray", padding: "10px"}}
            ><img src={iconIncrement} alt="Increase the number of the item"/></span>
            <span>{number}</span>
            <span 
            onClick={(e) => {
                e.stopPropagation();
                handleSub();
            }} 
            style={{background: "gray", padding: "10px"}}
            ><img src={iconDecrement} alt="Decrease the number of the item" /></span>
        </span>
    )
}