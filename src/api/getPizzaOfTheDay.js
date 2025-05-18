export default async function getPizzaOfTheDay() {
  const response = await fetch("/api/pizza-of-the-day");
  const data = await response.json();
  return data;
}
