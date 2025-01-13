import "./CartCard.css"
import { remove } from "../store/cartSlice"; // import action to dispatch
import { useDispatch } from "react-redux";

export default function CartCard({ prod }) {

  const {name, price, image} = prod;

  const dispatch = useDispatch();
  
  return (
    <div className="cartCard">
      <img src={image} alt="bild" />
      <p className="productName">{name}</p>
      <p className="productPrice">{price}</p>
      <button onClick={() => dispatch(remove(prod))}>Remove</button>
    </div>

  )
}
