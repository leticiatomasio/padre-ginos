import { useEffect, useState } from "react";
import getPizzas from "../api/getPizzas";

export const usePizzas = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    async function fetchPizzas() {
      const data = await getPizzas();
      setPizzas(data);
    }

    fetchPizzas();
  }, []);

  return pizzas;
};
