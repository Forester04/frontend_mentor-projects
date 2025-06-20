import { useState, createContext} from "react"
import Card from "./components/Card/Card"
import Cart from "./components/Cart/Cart"
import Confirmation from "./components/Cart/Confirmation"
import data from "/data"


const CartList = createContext()

export default function App() {
  

  const [cartList, setCartList] = useState([])
  const [confirmation, setConfirmation] = useState(false)
  const [items, setItems] = useState(data)

  let classname
  if (confirmation) {
    classname = "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
  }

  return (
    <main className={"lg:w-[1320px] lg:mx-auto w-5/6 mx-auto"}>
      <CartList.Provider value={{cartList, setCartList, items, setItems }}>
        <section className="flex flex-col gap-8 lg:flex-row  pb-8">
          <section className="lg:w-[900px] lg:mx-auto flex-grow-0">
            <h1 className="font-black text-4xl pb-4 pt-16">Desserts</h1>
            <div className="flex gap-8 xs:flex-wrap">
              <Card value={{cartList, setCartList}} className="shadow-md rounded-lg"/>
            </div>
          </section>
          <section className="flex-grow">
            <div className="w-full">
              <Cart confirmation={confirmation} setConfirmation={setConfirmation}/>
            </div>
          </section>
          <section className={classname}>
            {confirmation ? <Confirmation setConfirmation={setConfirmation}/> : null}
          </section>
        </section>
      </CartList.Provider>
    </main>
  )
}

export { CartList }


