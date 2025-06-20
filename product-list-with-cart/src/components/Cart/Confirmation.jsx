import { useContext }  from "react";
import { CartList } from "../../App"
import orderConfirmed from "/assets/images/icon-order-confirmed.svg"


export default function Confirmation({ setConfirmation}) {
    const { cartList, setCartList } = useContext(CartList)


    function padZeroRight(number) {
        const numStr = String(number);
        if (numStr.includes('.')) {
            return numStr + '0';
        } else if (!numStr.includes('.')) {
            return numStr + '.00'
        }
        return numStr;
    }

    function handleStartNew() {
        setConfirmation(prevOrder => !prevOrder)
        setCartList([])
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
            
                <div className="flex justify-between items-center border-b  pb-2 mb-4">
                    <div className="flex flex-col w-full">
                        <h3 className="font-medium">{item.name}</h3>
                        <div className="flex justify-between">
                            <div className="flex gap-4">
                                <span className="text-[#C94E25] font-medium">{`${number}x`}</span>
                                <span className="text-[#958681] font-medium">{`@ ${price}`}</span>
                            </div>
                            <span className="font-semibold">{` $ ${padZeroRight(subTotal)}`}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="lg:w-[400px] flex flex-col gap-2 bg-white shadow-md rounded-lg p-6">
            <img src={orderConfirmed} alt="Order confirmation" className="w-8"/>
            <h1 className="font-black text-3xl">Order Confirmed</h1>
            <p  className="text-[#958681]">We hope you enjoyed your food!</p>
            <div className="bg-[#FCF8F5] my-2 p-4 rounded-lg">
                {listOfCart}
            </div>
            <div className="flex justify-between py-4">
                <p>Order Total</p>
                <p className="text-3xl font-black">{`$ ${padZeroRight(total)}`}</p>
            </div>
            <button className="bg-red-500 p-4 rounded-full cursor-pointer text-lg text-white font-medium" onClick={handleStartNew}>Start New Order</button>
        </div>
    )
}