export async function getSingleCat(id: string) {

    const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
   
    if (!res.ok) {
      throw new Error('Failed to fetch cats')
    };
   
    return res.json();
}