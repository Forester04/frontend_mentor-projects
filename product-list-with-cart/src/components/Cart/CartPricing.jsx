import React from  "react"
import { CartList } from "../../App"
import iconRemove from "/assets/images/icon-remove-item.svg"
import iconCarbon from "/assets/images/icon-carbon-neutral.svg"





export default function CartPricing() {

    const { cartList, setCartList, items } = React.useContext(CartList)

    function padZeroRight(number) {
        const numStr = String(number);
        if (numStr.includes('.')) {
            return numStr + '0';
        } else if (!numStr.includes('.')) {
            return numStr + '.00'
        }
        return numStr;
    }

    function handleRemoveCartItem(itemName) {
        const remainingItems = cartList.filter(cartItem => cartItem.name !== itemName)
        setCartList(remainingItems)
    }

    let total = 0
    const listOfCart = cartList.map(item => {
        let price = padZeroRight(item.price)
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
                    <span>{` $ ${subTotal}`}</span>
                    <span onClick={() => handleRemoveCartItem(item.name)} style={{ padding: "10px", backgroundColor: "gray"}}><img src={iconRemove}/></span>
                </div>
                <div>
                    <p>Order Total</p>
                    <p>{`$ ${total}`}</p>
                </div>
                <button>Confirm Order</button>
            </div>
        )
    })

    return (
        <div>
            {listOfCart}
        </div>
    )
}