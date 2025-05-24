import { useState } from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./App.css";
import CartContext from "./contexts/CartContext";
import PizzaContext from "./contexts/PizzaContext";
import NotificationContext from "./contexts/NotificationContext";

const router = createRouter({ routeTree });

export default function App() {
  const cartHook = useState([]);
  const pizzaHook = useState(null);
  const notificationHook = useState("");

  return (
    <CartContext.Provider value={cartHook}>
      <PizzaContext.Provider value={pizzaHook}>
        <NotificationContext.Provider value={notificationHook}>
          <RouterProvider router={router} />
        </NotificationContext.Provider>
      </PizzaContext.Provider>
    </CartContext.Provider>
  );
}
