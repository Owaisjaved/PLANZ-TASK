import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext';
export const NavBar = () => {
    const [cart, setCart] = useContext(CartContext);
    return (

        <div className="navbar">
            <div className="brand">
                <Link to="/">
                    <img src="/images/planz.png" alt="brand-logo"></img>
                </Link>
            </div>
            <div className="nav-item">
                <div>
                    <Link to='/'>Photos</Link>
                </div>
                <div>
                    {cart.length > 0 ? <Link to='/cart'><i className="material-icons">shopping_cart</i>{cart.length}</Link>
                        :
                        <Link to='/cart'><i className="material-icons">add_shopping_cart</i></Link>}

                </div>
            </div>

        </div>
    )
}
