import { useContext } from  "react"
import { CartList } from "../../App"
import iconRemove from "/assets/images/icon-remove-item.svg"
import iconCarbon from "/assets/images/icon-carbon-neutral.svg"

import '/src/App'

export default function CartPricing({ confirmation, setConfirmation}) {

    const { cartList, setCartList} = useContext(CartList)

    console.log(confirmation)

    const objLength = Object.keys(cartList).length

    function handleOrder() {
        if (objLength > 0) {
            setConfirmation(prevOrder => !prevOrder)
        }
    }

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
            <div key={item.name} className="flex flex-col">
            
                <div className="flex justify-between items-center border-b pb-4">
                    <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <div className="flex">
                            <div className="flex gap-4">
                                <span className="text-[#C94E25] font-medium">{`${number}x`}</span>
                                <span className="text-[#958681] font-medium">{`@ ${price}`}</span>
                                <span className="text-[#958681] font-medium">{` $ ${padZeroRight(subTotal)}`}</span>
                            </div>
                        </div>
                    </div>
                    <div className="">
                            <span onClick={() => handleRemoveCartItem(item.name)}><img src={iconRemove} alt="Remove from cart" className="border border-black fill-black p-[2px] rounded-full cursor-pointer"/></span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="flex flex-col gap-4">
            {listOfCart}
            <div className="flex justify-between py-4">
                <p>Order Total</p>
                <p className="text-3xl font-black">{`$ ${padZeroRight(total)}`}</p>
            </div>
            <div className="bg-[#FCF8F5] p-4 flex justify-center gap-2 items-center"><img src={iconCarbon} alt="Carbon icon"/> <span>This is a <span className="font-semibold">carbon-neutral</span> delivery</span></div>
            <button className="bg-[#952C0C] p-4 rounded-full text-lg text-white font-medium cursor-pointer" onClick={handleOrder}>Confirm Order</button>
        </div>
    )
}