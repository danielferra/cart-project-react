import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"

const Navbar = () =>{
   const context = useContext(ShoppingCartContext)

    return(
      <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
        <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg">
                <NavLink to="/">
                  Shopping React
                </NavLink>
            </li>
            <li>
                <NavLink to="/">
                  Todo
                </NavLink>
            </li>
            <li>
                <NavLink to="/ropa">
                  Ropa
                </NavLink>
            </li>
            <li>
                <NavLink to="/electronicos">
                  Electronicos
                </NavLink>
            </li>
            <li>
                <NavLink to="/muebles">
                  Muebles
                </NavLink>
            </li>
            <li>
                <NavLink to="/juguetes">
                  Juguetes
                </NavLink>
            </li>
            <li>
                <NavLink to="/otros">
                  Otros
                </NavLink>
            </li>
        </ul>
        <ul className="flex items-center gap-3">
            <li>
                <NavLink to="/mis-ordenes">
                  Mis Ordenes
                </NavLink>
            </li>
            <li>
                <NavLink to="/mi-cuenta">
                  Mi Cuenta
                </NavLink>
            </li>
            <li>
                <NavLink to="/inicio-sesion">
                  Inicio Sesion
                </NavLink>
            </li>
            <li>
             🛒 {context.count}
            </li>
        </ul>
      </nav>
    )
}


export default Navbar