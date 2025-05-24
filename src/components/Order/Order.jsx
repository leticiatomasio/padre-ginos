import { useContext, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import CartContext from "../../contexts/CartContext";
import PizzaContext from "../../contexts/PizzaContext";
import styles from "./Order.module.css";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Order() {
  const [pizzaSize, setPizzaSize] = useState("S");
  const [cartItems, setCartItems] = useContext(CartContext);
  const [selectedPizza] = useContext(PizzaContext);
  const navigate = useNavigate();

  let price;
  price = intl.format(
    selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
  );

  function onSubmitOrder(event) {
    event.preventDefault();
    setCartItems([
      ...cartItems,
      { pizza: selectedPizza, size: pizzaSize, price },
    ]);
    navigate({ to: "/cart" });
  }

  return (
    <>
      <h2>Customize Order</h2>
      <form onSubmit={(e) => onSubmitOrder(e)}>
        <div className={styles.orderPizza}>
          <div
            className={styles.orderPizzaImage}
            style={{
              backgroundImage: "url(" + selectedPizza.image + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className={styles.orderPizzaInformation}>
            <div>
              <h2>{selectedPizza.name}</h2>
              <p>{selectedPizza.description}</p>
            </div>
            <fieldset className={styles.orderPizzaFieldset}>
              <legend className={styles.orderPizzaLegend}>
                Select the pizza size of your preference:
              </legend>

              <div className={styles.orderPizzaRadioOption}>
                <input
                  checked={pizzaSize === "S"}
                  type="radio"
                  value="S"
                  id="small-pizza"
                  aria-labelledby="label-small order-pizza-price"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label id="label-small" htmlFor="small-pizza">
                  Small
                </label>
              </div>

              <div className={styles.orderPizzaRadioOption}>
                <input
                  checked={pizzaSize === "M"}
                  type="radio"
                  value="M"
                  id="medium-pizza"
                  aria-labelledby="label-medium order-pizza-price"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label id="label-medium" htmlFor="medium-pizza">
                  Medium
                </label>
              </div>

              <div className={styles.orderPizzaRadioOption}>
                <input
                  checked={pizzaSize === "L"}
                  type="radio"
                  value="L"
                  id="large-pizza"
                  aria-labelledby="label-large order-pizza-price"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label id="label-large" htmlFor="large-pizza">
                  Large
                </label>
              </div>
            </fieldset>
            <p id="order-pizza-price" className={styles.orderPizzaPrice}>
              {price}
            </p>
          </div>
        </div>
        <div className={styles.orderAction}>
          <button type="submit">Add to cart</button>
        </div>
      </form>
    </>
  );
}
