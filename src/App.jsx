import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from './Context'
import Home from './Pages/Home'
import InicioSesion from './Pages/InicioSesion'
import MiCuenta from './Pages/MiCuenta'
import MiOrden from './Pages/MiOrden'
import MisOrdenes from './Pages/MisOrdenes'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar'
import ChekoutSideMenu from './Components/ChekoutSideMenu'
import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    { path: "/", element: <Home/>},
    { path: "/inicio-sesion", element: <InicioSesion/>},
    { path: "/mi-cuenta", element: <MiCuenta/>},
    { path: "/mi-orden", element: <MiOrden/>},
    { path: "/mis-ordenes", element: <MisOrdenes/>},
    { path: "/mi-orden/last", element: <MiOrden/>},
    { path: "/mis-ordenes/:id", element: <MiOrden/>},
    { path: "/*", element: <NotFound/>},
  ])
  return routes
}

const App = () => {
  return (
  <ShoppingCartProvider>
    <BrowserRouter>
    <AppRoutes/>
    <Navbar/>
    <ChekoutSideMenu/>
  </BrowserRouter>
  </ShoppingCartProvider>
      
  )
}

export default App
