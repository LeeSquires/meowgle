import { Cat } from "@/types/cat.types";
import { getSingleCat } from "@/lib/getSingleCat";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Page({ params }: { params: { id: string } }) {
  const cat: Cat = await getSingleCat(params.id);

  if (!cat) return <p>Cat cannot be found.</p>;

  return (
    <main className="p-4">
      <Button>
        <Link href={`/?breed=${cat.breeds[0].id}`}>{`Back`}</Link>
      </Button>
      <div className="flex flex-col sm:flex-row md:flex-row p-0 pt-4 sm:p-4 sm:pl-0 gap-8">
        <div className="max-w-[600px]">
          <img
            className="object-cover w-full h-full rounded-md"
            src={cat.url}
            alt={cat.breeds[0].description}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl">{cat.breeds[0].name}</h1>
          <div className="flex gap-2 items-center">
            <h2 className="text-2xl">{cat.breeds[0].origin}</h2>
            <img
              src={`https://flagcdn.com/28x21/${cat.breeds[0].country_code.toLowerCase()}.png`}
              width="28"
              height="21"
              alt=""
            />
          </div>

          <p className="italic">{cat.breeds[0].temperament}</p>
          <p>{cat.breeds[0].description}</p>
        </div>
      </div>
    </main>
  );
}
