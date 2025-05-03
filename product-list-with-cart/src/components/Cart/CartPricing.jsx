import React from  "react"
import { ItemValue } from "../Card/Card"


export default function CartPricing() {

    const { number, cartList } = React.useContext(ItemValue)


    function subTotal(num, price) {
        return num * price
    }

    let total = 0
    let grandTotal

    const listOfCart = cartList.map(item => {
        let price = item.price
        let singleSubTotal = subTotal(number, price)
        grandTotal += total
        return (
            <div key={item.name}>
                <h3>{item.name}</h3>
                <div>
                    <span>{`${number}x`}</span>
                    <span>{`@ ${price}`}</span>
                    <span>{singleSubTotal}</span>
                </div>
                <div>
                    <p>Order Total</p>
                    <p>{`$ ${grandTotal}`}</p>
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