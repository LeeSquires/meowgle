import { Cat } from "@/types/cat.types";
import { getSingleCat } from "@/lib/getSingleCat";

export default async function Page({ params }: { params: { id: string } }) {
    const cat: Cat = await getSingleCat(params.id);

    if (!cat) return <p>Cat cannot be found.</p>;

    return (
        <div className="w-[300px] h-[300px]" key={cat.id}>
        <img
          className="object-cover w-full h-full"
          src={cat.url}
          alt={cat.breeds[0].description}
        />
        <p>{cat.breeds[0].name}</p>
        <p>{cat.breeds[0].origin}</p>
        <p>{cat.breeds[0].temperament}</p>
        <p>{cat.breeds[0].description}</p>
      </div>
    )
  }