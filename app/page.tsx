import { getCats } from "@/lib/getCats";
import { Cat } from "@/types/cat.types";
import Link from "next/link";

export default async function Page() {
  const cats = await getCats();

  if (!cats) return <p>No cats were found.</p>;

  return (
    <div className="flex flex-col gap-8">
      {cats.map((cat: Cat) => (
        <div className="w-[300px] h-[300px]" key={cat.id}>
          <img
            className="object-cover w-full h-full"
            src={cat.url}
            alt={cat.breeds[0].description}
          />
          <Link href={`/cats/${cat.id}`}><button>View Cat</button></Link>
        </div>
      ))}
    </div>
  );
};