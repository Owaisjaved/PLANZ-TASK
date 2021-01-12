import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import M from 'materialize-css'
export const Cart = () => {
  const [button, setButton] = useState("Place Order")
  const [cart, setCart] = useContext(CartContext);
  var totalPrice = 5.99 * cart.length

    //Handle Cart
  const emptyCart = () => {
    setCart([]);
    M.toast({ html: 'Cart has been Cleared' })
  }
  // Handle Order Placing
  const orderPlaced = () => {
    setButton("Placing Order....")
    setTimeout(() => {
      console.log("Order placed!")
      setButton("Place Order")
      setCart([])
      M.toast({ html: 'Order has been placed, Thanks for Shopping' })
    }, 3000)
  }
  return (
    <div>

    <div className="cart-details">
      <div>
        <h5>Items in cart : {cart.length}</h5>
      </div>

      <div>
        <h5>Total price : ${totalPrice}</h5>
        { cart.length > 0 ?
        <div >
          <button className="specialbutton" onClick={emptyCart} title="Remove Items"><i className="material-icons"> remove_shopping_cart</i></button>
        </div> : null
      }
      </div>

    </div>
    
      {cart.length > 0 ? <div className="cart-check">
        <button onClick={orderPlaced} className="btn waves-effect waves-light" type="submit" name="action">{button}
          <i className="material-icons right">done_all</i>
        </button></div> :
        <h5>Your Cart is Empty!!!</h5>
      }
      <hr />
      <div className="cart-container"> {cart.map(item => (
        <img src={item.url} key={Math.random()} alt="images in Cart"></img>
      ))}</div>
    </div>

  )
}