import React from "react"
export default function CardButton({ children, onClick }) {
    return (
        <button onClick={onClick}>{children}</button>
    )
}