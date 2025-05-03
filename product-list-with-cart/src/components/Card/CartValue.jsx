import React from "react"

export default function CartValue({ handleAdd, handleSub, number, handleRemove}) {
    console.log(number)
   

    return (
        <div onClick={handleRemove} style={{ background: "red", padding: "1rem", width: "200px"}}>
            <span onClick={handleAdd} style={{background: "gray", padding: "10px"}}>+</span>
            <span>{number}</span>
            <span onClick={handleSub} style={{background: "gray", padding: "10px"}}>-</span>
        </div>
    )
}