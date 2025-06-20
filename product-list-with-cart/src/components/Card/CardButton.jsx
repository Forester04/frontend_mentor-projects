import React from "react"
import { clsx } from "clsx"

export default function CardButton({ children, onClick, className}) {
    const classname = clsx(className, "lg:w-36 w-48 border border-black/60 bg-white flex justify-center items-center gap-2 font-medium text-sm font-redhat sm:px-4 py-3 px-6 rounded-full shadow-md hover:text-rose-500 hover:border-2 hover:border-red-400 cursor-pointer")
    return (
        <button onClick={onClick} className={classname}>{children}</button>
    )
}