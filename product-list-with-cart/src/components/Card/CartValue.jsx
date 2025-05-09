import React from "react"
import iconDecrement from "/assets/images/icon-decrement-quantity.svg"
import iconIncrement from "/assets/images/icon-increment-quantity.svg"

export default function CartValue({ handleAdd, handleSub, number, handleRemove}) {
   

    return (
        <span onClick={handleRemove} style={{ background: "red", padding: "1rem", width: "200px"}}>
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