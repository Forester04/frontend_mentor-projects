import React from "react"
import CartPricing from "./CartPricing"
import { CartList } from "../../App"


export default function Cart() {

    const { cartList } = React.useContext(CartList)


    const value = cartList.map(cartItem => cartItem.number)

    const totalCartItems = value.reduce((acc, curr) => acc + curr, 0)

    return (
        <section>
            <h1>Your Cart({totalCartItems})</h1>
            <CartPricing cartList={cartList}/>
        </section>
        
    )
}