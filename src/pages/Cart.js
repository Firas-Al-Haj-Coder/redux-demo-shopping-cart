import { CartCard } from "../components";
import useTitle from "../hooks/useTitle"; // Korrekt als Standardexport importiert

import { useSelector } from "react-redux"; // frage den geänderten/aktuellen Zustand des Stores ab - wir brauchen die alten fiktiven Artikeln nicht mehr

// const products = [
//   { id: 1, name: "Sony Wh-Ch510 Bluetooth Wireless", price: 149, image: process.env.PUBLIC_URL + "/assets/images/1001.png" },
//   { id: 2, name: "boAt Rockerz 450", price: 49, image: process.env.PUBLIC_URL + "/assets/images/1002.png" },
// ];


export default function Cart() {
  useTitle("Cart"); // Hook-Aufruf in die Komponente verschoben

  const products = useSelector(state => state.cartState.cartList); // select which state we are going to work with only state.cartState holds total too, but we need cartList, these are the current products in the list

  const total = useSelector(state => state.cartState.total);

  console.log(products);
  return (
    <main>
      <section>
        <h1>Cart items: {products.length} | total price: ${total}</h1>
        {products.map((p) => {
          // console.log(p); // Ausgabe des p-Objekts in der Konsole
          return <CartCard key={p.id} prod={p} />;
        })}
      </section>
    </main>
  );
}