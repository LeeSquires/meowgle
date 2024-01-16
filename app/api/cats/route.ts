export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageIndex = searchParams.get("pageIndex");
  const breedId = searchParams.get("breedId");

  if (!breedId) {
    return new Response("Breed ID is required.", {
      status: 404,
    });
  }

  // Conditionally set api key
  const apiKey = process.env.API_KEY || "";

  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?page=${pageIndex}&order=desc&limit=10&breed_id=${breedId}`,
    {
      headers: {
        "x-api-key": apiKey,
      },
    }
  );

  const cats = await res.json();

  return Response.json(cats);
}
