import React from "react"
import { clsx } from "clsx"
import CardButton from "./CardButton"
import CartValue from "./CartValue"
import { CartList } from "../../App"
import addToCart from "/assets/images/icon-add-to-cart.svg"

import '/src/App'


export default function Card({ className }) {

    const { cartList, setCartList, items, setItems } = React.useContext(CartList)

    React.useEffect(() => {
        setItems(prevList => prevList.map(item => ({ ...item, selected: false })))
      }, [])

    function handleAddToCartList(item) {
        const exists = cartList.some(cartItem => cartItem.name === item.name);
        if (exists) return; // If the item already exists in the cartlist
      
        const updatedCart = [
          ...cartList,
          { ...item, selected: true, number: 1 }
        ];
      
        setCartList(updatedCart)
    }


    function handleIncrement(itemName) {
        setCartList(prevList =>
          prevList.map(cartItem =>
            cartItem.name === itemName
              ? { ...cartItem, number: cartItem.number + 1 }
              : cartItem
          )
        );
      }

    function handleDecrement(itemName) {
    setCartList(prevList =>
        prevList.map(cartItem =>
        cartItem.name === itemName && cartItem.number > 1
            ? { ...cartItem, number: cartItem.number - 1 }
            : cartItem
        )
    );
    }

    function handleRemoveCart(itemName) {
        console.log("Marking unselected:", itemName);
    
        const updatedCart = cartList.filter(cartItem => cartItem.name !== itemName)
    
        setCartList(updatedCart);
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


    const cardInfo = items.map(item => {


        const desktop = item.image.desktop

        const inCart = cartList.find(cartItem => cartItem.name === item.name);
        const isSelected = inCart?.selected
        const itemNumber = inCart?.number

        const classSelect = isSelected ? " border-2 border-red-600" : ""
        console.log(classSelect)

        const classname = clsx(classSelect, "lg:w-64 w-96 rounded-lg")
        const classFlex = clsx(className, "lg:w-64 w-96")

    return (
        <div key={item.name} className={classFlex}>
            <div className="relative mb-8 lg:w-64 w-96">
                <img src={desktop} alt={item.name} className={classname} />
                {isSelected ? (
                    <CartValue
                    handleAdd={() => handleIncrement(item.name)}
                    handleSub={() => handleDecrement(item.name)}
                    handleRemove={() => handleRemoveCart(item.name)}
                    number={itemNumber}
                    className={"absolute lg:-bottom-5 lg:right-16 -bottom-5 right-24"}
                    />
                    ) : (
                    <CardButton onClick={() => handleAddToCartList(item)} className={"absolute lg:-bottom-5 lg:right-16 -bottom-5 right-24"}>
                    <img src={addToCart} alt="add to cart" />
                    Add to Cart
                    </CardButton>)
                }
            </div>
            <div className="p-2">
                <p className="text-gray-500 text-base">{item.category}</p>
                <h2 className="font-medium">{item.name}</h2>
                <p className="text-[#C94E25] font-semibold">{`$ ${padZeroRight(item.price)}`}</p>
            </div>
        </div>
    )})
    return (
        <>
            {cardInfo}
        </>
    ) 
}
