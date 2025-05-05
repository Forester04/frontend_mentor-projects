import React from "react"

export default function CartValue({ handleAdd, handleSub, number, handleRemove}) {
   

    return (
        <span onClick={handleRemove} style={{ background: "red", padding: "1rem", width: "200px"}}>
            <span  
            onClick={(e) => {
                e.stopPropagation();
                handleAdd();
            }}
            style={{background: "gray", padding: "10px"}}
            >+</span>
            <span>{number}</span>
            <span 
            onClick={(e) => {
                e.stopPropagation();
                handleSub();
            }} 
            style={{background: "gray", padding: "10px"}}
            >-</span>
        </span>
    )
}