export default async function getPizzas() {
  // await new Promise((resolve) => setTimeout(resolve, 3000)); // remove this later, just to show you the loading state

  const pizzasRes = await fetch("/api/pizzas");
  const data = await pizzasRes.json();
  return data;
}
