import { createContext , useContext, useState  } from "react";

const Cartcontext = createContext()

export function useCart(){
    return useContext(Cartcontext)
}

export function CartProvider({children}){

    const [cartItems , setCartItems] = useState([])
    return(
        <Cartcontext.Provider value={{cartItems , setCartItems}}>
            {children}
        </Cartcontext.Provider>
    )
}
