import React from "react"
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

    function useWindowWidth() {
        const [width, setWidth] = React.useState(window.innerWidth)

        React.useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)

        }, [])

        return width
    }

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

    let width = useWindowWidth()


    const cardInfo = items.map(item => {


        const desktop = item.image.desktop
        const tablet = item.image.tablet
        const mobile = item.image.mobile

        const inCart = cartList.find(cartItem => cartItem.name === item.name);
        const isSelected = inCart?.selected
        const itemNumber = inCart?.number

    return (
        <div key={item.name} className={className}>
            {width > 800 ? 
            width === 1440 ? <div className="imageWrapper"><img src={desktop} alt={item.name} className="image"/></div> : <div className="imageWrapper"><img src={tablet} alt={item.name} className="image" /></div>
            :<div className="imageWrapper"><img src={mobile} alt={item.name} className="image"/></div>}
            {isSelected ? (
                <CartValue
                handleAdd={() => handleIncrement(item.name)}
                handleSub={() => handleDecrement(item.name)}
                handleRemove={() => handleRemoveCart(item.name)}
                number={itemNumber}
                className="cartFun"
                />
                ) : (
                <CardButton onClick={() => handleAddToCartList(item)} className="cartBtn">
                <img src={addToCart} alt="add to cart" />
                Add to Cart
                </CardButton>)
            }
            <div className="description">
                <p>{item.category}</p>
                <h2>{item.name}</h2>
                <p>{`$ ${padZeroRight(item.price)}`}</p>
            </div>
        </div>
    )})
    return (
        <>
            {cardInfo}
        </>
    ) 
}
