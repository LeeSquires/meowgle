export async function getCats() {

    // Provide fallback in case API_KEY is not set
    const apiKey = process.env.API_KEY || "";

    const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=true", {
        headers: {
            "x-api-key": apiKey
        },
    });
   
    if (!res.ok) {
      throw new Error('Failed to fetch cats')
    };
   
    return res.json();
}