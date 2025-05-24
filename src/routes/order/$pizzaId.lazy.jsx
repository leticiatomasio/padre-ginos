import { createLazyFileRoute } from "@tanstack/react-router";
import Order from "../../components/Order/Order";

export const Route = createLazyFileRoute("/order/$pizzaId")({
  component: Order,
});
