import React from "react"
import CardButton from "./CardButton"
import CartValue from "./CartValue"
import data from "/data"


const ItemValue  = React.createContext()

export default function Card() {

    const [items, setItems] = React.useState(data)


    const [cartList, setCartList] = React.useState([])

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
        if (exists) return;
      
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
    
    console.log(cartList)

    let width = useWindowWidth()

    const cardInfo = items.map(item => {


        const desktop = item.image.desktop
        const tablet = item.image.tablet
        const mobile = item.image.mobile

        const inCart = cartList.find(cartItem => cartItem.name === item.name);
        const isSelected = inCart?.selected
        const itemNumber = inCart?.number

    return (
        <div key={item.name}>
            {width > 800 ? 
            width === 1440 ? <img src={desktop} alt={item.name} /> : <img src={tablet} alt={item.name} />
            :<img src={mobile} alt={item.name} />}
            {isSelected ? (
                <CartValue
                handleAdd={() => handleIncrement(item.name)}
                handleSub={() => handleDecrement(item.name)}
                handleRemove={() => handleRemoveCart(item.name)}
                number={itemNumber}
                />
                ) : (
                <CardButton onClick={() => handleAddToCartList(item)}>
                <img src="./assets/images/icon-add-to-cart.svg" alt="add to cart" />
                Add to Cart
                </CardButton>)
            }
            <div className="description">
                <p>{item.category}</p>
                <h2>{item.name}</h2>
                <p>{`$ ${item.price}`}</p>
            </div>
        </div>
    )})
    return (
        <ItemValue.Provider value={{cartList}}>
            {cardInfo}
        </ItemValue.Provider>
    )
}


export { ItemValue }