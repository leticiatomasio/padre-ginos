import { createLazyFileRoute } from "@tanstack/react-router";
import Cart from "../components/Cart/Cart";

export const Route = createLazyFileRoute("/cart")({
  component: Cart,
});
