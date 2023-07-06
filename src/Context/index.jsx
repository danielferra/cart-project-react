import { createContext, useState } from "react";


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) =>{
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    const [isChekoutSideMenuOpen, setIsChekoutSideMenuOpen] = useState(false)
    const openChekoutSideMenu = () => setIsChekoutSideMenuOpen(true)
    const closeChekoutSideMenu = () => setIsChekoutSideMenuOpen(false)

    const [productToShow, setProductToShow] = useState({})


    const [cartProducts, setCartProducts] = useState([])

    const [order, setOrder] = useState([])

    return(
     <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isChekoutSideMenuOpen,
        openChekoutSideMenu,
        closeChekoutSideMenu,
        order,
        setOrder
     }}>
         {children}  
     </ShoppingCartContext.Provider>
    )
}