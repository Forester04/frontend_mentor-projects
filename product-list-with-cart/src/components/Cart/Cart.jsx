import React from "react"
import CartPricing from "./CartPricing"
import { ItemValue } from "../Card/Card"


export default function Cart() {

    const { number } = React.useContext(ItemValue)

    return (
        <section>
            <h1>Your Cart({number})</h1>
            <CartPricing />
        </section>
        
    )
}