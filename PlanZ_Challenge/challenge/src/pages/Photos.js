import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

import M from 'materialize-css'
export const Photos = (item) => {
  const [cart, setCart] = useContext(CartContext);
  const [isCardView, setCardView] = useState(false)

  //Handle Icon Toggle  

  const toggleclick = () => {
    setCardView(!isCardView)
    let x = isCardView ? 'UnLoved' : ' Loved';
    M.toast({ html: x })
  }
  //Handle AddToCart

  const addToCart = () => {
    const tshirt = { url: item.url, id: item.id };
    setCart(currentState => [...currentState, tshirt]);
    M.toast({ html: 'Picture Has Been Added to Cart' })
  }

  return (

    <div className="container">
      <div className="gallery">
        <img src={item.url} alt="Gallery"></img>
        <h5> {item.price} </h5>
        <button className="button" onClick={toggleclick}>
          {isCardView ?
            <span style={{ color: "red" }} ><i className="material-icons">favorite</i></span>
            : <span style={{ color: "red" }} ><i className="material-icons">favorite_border</i></span>
          }
        </button>
        <button className="button" style={{ float: "right" }} onClick={addToCart}><i className="material-icons">add</i></button>
      </div>
    </div>
  )
}