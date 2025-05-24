export default async function sendOrder(cartItems) {
  await fetch("/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cartItems,
    }),
  });
}
