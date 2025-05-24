import { useContext } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ShoppingCartIcon, StarIcon } from "@phosphor-icons/react";
import { usePizzaOfTheDay } from "../../hooks/usePizzaOfTheDay";
import { usePizzas } from "../../hooks/usePizzas";
import PizzaContext from "../../contexts/PizzaContext";
import styles from "./PizzaList.module.css";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function PizzaList() {
  const pizzas = usePizzas();
  const pizzaOfTheDay = usePizzaOfTheDay();
  const [, setSelectedPizza] = useContext(PizzaContext);
  const navigate = useNavigate();

  function selectPizza(pizza) {
    setSelectedPizza(pizza);
    navigate({ to: "/order/$pizzaId", params: { pizzaId: pizza.id } });
  }

  return pizzas?.length ? (
    <div className={styles.pizzaList}>
      {pizzas.map((pizza) => (
        <div className={styles.pizzaItemWrapper} key={pizza.id}>
          <div
            className={`${styles.pizzaItem} ${pizzaOfTheDay.id === pizza.id ? styles.pizzaOfTheDay : ""}`}
          >
            <div className={styles.pizzaOfTheDayStar}>
              <StarIcon size={32} weight="fill" />
            </div>
            <div className={styles.pizzaOfTheDayTag}>Pizza of the day</div>
            <div
              className={styles.pizzaImage}
              style={{
                backgroundImage: "url(" + pizza.image + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className={styles.pizzaInformation}>
              <div>
                <h3>{pizza.name}</h3>
                <p className={styles.pizzaDescription}>{pizza.description}</p>
              </div>
              <div className={styles.pizzaActionBar}>
                <p className={styles.pizzaPrice}>
                  {intl.format(pizza.sizes["S"])}
                </p>
                <button
                  className={styles.expandBtn}
                  aria-label={`
                    Order ${pizza.name} for ${pizza.price}. 
                    ${pizza.description}. 
                    ${pizzaOfTheDay.id === pizza.id ? "This is the pizza of the day." : ""}
                  `}
                  onClick={() => selectPizza(pizza)}
                >
                  <ShoppingCartIcon size={20} aria-hidden="true" />
                  <span aria-hidden="true">Order</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    ""
  );
}
