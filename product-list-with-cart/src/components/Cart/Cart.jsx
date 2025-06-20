import { useContext } from "react"
import CartPricing from "./CartPricing"
import { CartList } from "../../App"

import emptyCart from "/assets/images/illustration-empty-cart.svg"

import '/src/App'


export default function Cart({ confirmation, setConfirmation }) {

    const { cartList } = useContext(CartList)

    const objLength = Object.keys(cartList).length

    const value = cartList.map(cartItem => cartItem.number)

    const totalCartItems = value.reduce((acc, curr) => acc + curr, 0)

    

    return ( 
        <section className="lg:w-[400px]  lg;mx-auto p-6 shadow-md bg-white mb-8 flex flex-col gap-4 mt-16 w-96">
            <h1 className="text-[#C94E25] font-black text-3xl">Your Cart({totalCartItems})</h1>
            { objLength > 0 ? 
            <CartPricing confirmation={confirmation} setConfirmation={setConfirmation}/> : 
            <div className="flex flex-col justify-center items-center"> 
                <img src={emptyCart} alt="Your cart is empty" className="w-24 py-8"/>
                <p className="text-[#958681] text-center">Your added items will appear here.</p>
            </div>}
        </section>  
    )
}