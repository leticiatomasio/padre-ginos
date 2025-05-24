export default async function getPizzas() {
  const pizzasRes = await fetch("/api/pizzas");
  const data = await pizzasRes.json();
  return data;
}
