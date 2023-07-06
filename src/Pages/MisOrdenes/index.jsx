import Layout from "../../Components/Layout"
import { Link } from "react-router-dom"
import { useContext } from "react"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"


function MisOrdenes() {
  const context = useContext(ShoppingCartContext)
 

    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
         <h1 className="font-medium text-xl">Mis Ordenes</h1>
        </div>
      {
        context.order.map((order, index) =>(
          <Link key={index} to={`/mis-ordenes/${index}`}>
          <OrdersCard
          totalPrice={order.totalPrice}
          totalProducts={order.totalProducts}/>
          </Link>
        ))
      }
    </Layout>
    )
  }
  
  export default MisOrdenes
  