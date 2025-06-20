import React from "react"
import { clsx } from "clsx"
import iconDecrement from "/assets/images/icon-decrement-quantity.svg"
import iconIncrement from "/assets/images/icon-increment-quantity.svg"

import '/src/App'

export default function CartValue({ handleAdd, handleSub, number, handleRemove, className }) {
   
    const classname = clsx(className, "lg:w-36 w-48 py-3 bg-red-500 flex justify-around items-center rounded-full shadow-md")
    return (
        <span onClick={handleRemove} className={classname}>
            <span  
            onClick={(e) => {
                e.stopPropagation();
                handleSub();
            }}
            ><img src={iconDecrement} alt="Decrease the number of the item" className="border py-1.5 px-0.5 rounded-full cursor-pointer fill-red-900 hover:bg-white/30"/></span>
            <span className="text-white font-medium">{number}</span>
            <span 
            onClick={(e) => {
                e.stopPropagation();
                handleAdd();
            }}
            ><img src={iconIncrement} alt="Increase the number of the item" className="border p-[2px] rounded-full cursor-pointer fill-red-900 hover:bg-white/30" /></span>
        </span>
    )
}