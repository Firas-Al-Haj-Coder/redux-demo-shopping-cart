import './Header.css';
import { Link, NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

const logo = process.env.PUBLIC_URL + '/assets/images/logo_192.jpg';

export default function Header() {

  const cartList = useSelector(state => state.cartState.cartList); // Achtung Fehlerquelle!! state.cartState.cartList
  // state in den Reducer-Funktionen (add, remove) bezieht sich auf den Zustand des Slices, der von createSlice erstellt wurde.
  // state.cartList und state.total sind direkte Zugriffe auf die Eigenschaften des Zustands des Slices.

  return (
    <header>
        <Link to="/" className="logo">
            <img className="rounded" src={logo} alt="Logo" />
            <span>Redux Cart</span>
        </Link>

        <nav className='navigation'>
            <NavLink to='/' className='link'>Home</NavLink>
            <NavLink to='/cart' className='link'>Cart</NavLink>
        </nav>

        <Link to="/cart" className="items">
            <span>Cart: {cartList.length} </span>
        </Link>
    </header>
  );
}