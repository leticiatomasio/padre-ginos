import { createLazyFileRoute } from "@tanstack/react-router";
import PizzaList from "../components/PizzaList/PizzaList";

export const Route = createLazyFileRoute("/pizzas")({
  component: PizzaList,
});
