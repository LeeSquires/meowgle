export async function getBreeds() {
  const res = await fetch("https://api.thecatapi.com/v1/breeds");

  if (!res.ok) {
    throw new Error("Failed to fetch cat breeds");
  }

  return res.json();
}
