import React from "react"
import Card from "./components/Card/Card"
import Cart from "./components/Cart/Cart"
import data from "/data"

import './App.css'


const CartList = React.createContext()

export default function App() {
  

  const [cartList, setCartList] = React.useState([])
  const [items, setItems] = React.useState(data)

  return (
    <main>
      <CartList.Provider value={{cartList, setCartList, items, setItems}}>
        <section>
          <h1>Desserts</h1>
          <div>
            <Card value={{cartList, setCartList}}/>
          </div>

        </section>
        <section>
          <div>
            <Cart value={{cartList, setCartList}}/>
          </div>
        </section>
      </CartList.Provider>

      



    </main>
  )
}

export { CartList }


