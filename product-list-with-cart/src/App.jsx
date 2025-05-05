import React from "react"
import Card from "./components/Card/Card"
import Cart from "./components/Cart/Cart"

import './App.css'


const CartList = React.createContext()

export default function App() {
  

  const [cartList, setCartList] = React.useState([])

  return (
    <main>
      <CartList.Provider value={{cartList, setCartList}}>
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


