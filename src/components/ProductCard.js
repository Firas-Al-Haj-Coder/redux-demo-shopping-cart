import "./ProductCard.css"

import { add, remove } from "../store/cartSlice"
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function ProductCard({ prod }) {
  const { name, price, image } = prod;

  const dispatch = useDispatch();
  function handleAdd() {
    dispatch(add(prod)); // dispatches a payload of the product to my add reducer function
  }

  function handleRemove() {
    dispatch(remove(prod)); // dispatches a payload of the product to my remove reducer function
  }

  // check if the current productCard Blatt is already in my List
  const cartList = useSelector(state => state.cartState.cartList);
  const [isInCart, setIsInCart] = useState(false); // erstmal werden alle frei als nicht in Cart gesetzt - real Life anders

  useEffect(() => {
    const findState = cartList.find( item => item.id  === prod.id);

    if(findState) {

      setIsInCart(true);
    
    } else {
      
      setIsInCart(false);

    }
  }, [cartList, prod.id]);

  return (
    <div className="productCard">
      <img src={image} alt="bild" />
      <p className="prodName">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? <button className="remove" onClick={handleRemove}>Remove from cart</button> : <button onClick={handleAdd}>Add to cart</button>

}
      </div>
    </div>
  );
}