import { useContext } from "react";
import { Link } from "@tanstack/react-router";
import { ShoppingCartIcon } from "@phosphor-icons/react";
import CartContext from "../../contexts/CartContext";
import styles from "./Header.module.css";

export default function Header() {
  const [cartItems] = useContext(CartContext);

  return (
    <div className={styles.header}>
      <Link to="/">
        <img src="/padre-ginos.svg" alt="Padre Gino's - Order now"></img>
      </Link>
      <Link
        className={styles.headerCartLink}
        to="/cart"
        aria-label={
          cartItems.length === 0
            ? "Cart is empty"
            : `Cart with ${cartItems.length} item${cartItems.length === 1 ? "" : "s"}`
        }
      >
        <ShoppingCartIcon size={24} aria-hidden="true" />
        {cartItems.length > 0 ? (
          <span className={styles.headerCartCount} aria-hidden="true">
            {cartItems.length}
          </span>
        ) : (
          ""
        )}
      </Link>
    </div>
  );
}
