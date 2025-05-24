import { useContext } from "react";
import { useNavigate } from "@tanstack/react-router";
import CartContext from "../../contexts/CartContext";
import NotificationContext from "../../contexts/NotificationContext";
import styles from "./Cart.module.css";
import sendOrder from "../../api/sendOrder";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Cart() {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [, setNotification] = useContext(NotificationContext);
  const navigate = useNavigate();

  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const current = cartItems[i];
    total += current.pizza.sizes[current.size];
  }

  async function checkout() {
    sendOrder(cartItems);
    setNotification(
      "Your order was placed successfully. Thanks for choosing us!",
    );
    setCartItems([]);
    navigateToStart();
  }

  function navigateToStart() {
    navigate({ to: "/" });
  }

  return cartItems.length ? (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li className={styles.cartItem} key={index}>
            <div>
              <span>1x {item.pizza.name} – </span>
              <span>{item.size}</span>
            </div>
            <span>{item.price}</span>
          </li>
        ))}
        <li className={`${styles.cartItem} ${styles.cartTotal}`}>
          <span>Total</span>
          <span>{intl.format(total)}</span>
        </li>
      </ul>
      <div className={styles.cartActions}>
        <button className="secondary" onClick={navigateToStart}>
          Choose more pizzas
        </button>
        <button onClick={checkout}>Place order</button>
      </div>
    </div>
  ) : (
    <div>
      <span>No items added to the cart.</span>
    </div>
  );
}
