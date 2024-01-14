import Breeds from "@/components/breeds";
import Cats from "@/components/cats";
import { getBreeds } from "@/lib/getBreeds";

export default async function Page() {
  const breeds = await getBreeds();

  return (
    <div>
      <Breeds breeds={breeds} />
      <Cats />
    </div>
  );
}
