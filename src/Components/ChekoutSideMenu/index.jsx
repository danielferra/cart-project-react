import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import "./styles.css"

const ChekoutSideMenu = () =>{
    const context = useContext( ShoppingCartContext)
    
    const handleDelete = (id) =>{
       const filteredProducts = context.cartProducts.filter(product => product.id != id)
       context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () =>{
      const orderToAdd = {
        date: "01.02.23",
        products: context.cartProducts,
        totalProducts: context.cartProducts.length,
        totalPrice: totalPrice(context.cartProducts)
      }
      context.setOrder([...context.order, orderToAdd])
      context.setCartProducts([])
    }
    
   return(
    <aside
    className={`${context.isChekoutSideMenuOpen ? "flex" : "hidden"} chekout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Mi Orden</h2>
        <div>
           <XMarkIcon
           className="h-6 w-6 text-black cursor-pointer"
           onClick={() => context.closeChekoutSideMenu()}></XMarkIcon> 
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
      {
        context.cartProducts.map(product =>( 
           <OrderCard
             key={product.id}
             id={product.id}
             title={product.title}
             imageUrl={product.images}
             price={product.price}
             handleDelete={ handleDelete}
            />
        ))
      }
      </div>
      <div className='px-6 mb-6'>
      <p className='flex justify-between items-center mb-2'>
        <span className='font-light'>Total:</span>
        <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
      </p>
      <Link to="/mi-orden/last">
      <button className='bg-black w-full py-3 text-white rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
      </Link>
      </div>
      </aside>
   )
}

export default ChekoutSideMenu