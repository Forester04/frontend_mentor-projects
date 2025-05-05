import React from  "react"
import { CartList } from "../../App"


export default function CartPricing() {

    const { cartList } = React.useContext(CartList)

    let total = 0
    const listOfCart = cartList.map(item => {
        let price = item.price
        let number = item.number
        let subTotalFunction = ((number, price) => number * price)
        let subTotal = subTotalFunction(number, price)
        total += subTotal
        return (
            <div key={item.name}>
                <h3>{item.name}</h3>
                <div>
                    <span>{`${number}x`}</span>
                    <span>{`@ ${price}`}</span>
                    <span>{subTotal}</span>
                </div>
                <div>
                    <p>Order Total</p>
                    <p>{`$ ${total}`}</p>
                </div>
            </div>
        )
    })

    return (
        <div>
            {listOfCart}
        </div>
    )
}