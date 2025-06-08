import React from "react"
export default function CardButton({ children, onClick, className}) {
    return (
        <button onClick={onClick} className={className}>{children}</button>
    )
}