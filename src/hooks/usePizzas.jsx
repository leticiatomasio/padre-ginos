import { useEffect, useState } from "react";
import getPizzas from "../api/getPizzas";

export const usePizzas = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    async function fetchPizzaTypes() {
      const data = await getPizzas();
      setPizzas(data);
    }

    fetchPizzaTypes();
  }, []);

  return pizzas;
};
