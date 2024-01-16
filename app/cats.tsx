"use client";

import { useState } from "react";
import Link from "next/link";
import { Cat } from "@/types/cat.types";
import { FC } from "react";
import useSWRInfinite from "swr/infinite";
import fetcher from "@/lib/fetcher";
import { useSearchParams } from "next/navigation";
import ImageSkeleton from "../components/image-skeleton";
import { Button } from "@/components/ui/button";

const Cats: FC = () => {
  const searchParams = useSearchParams();
  const breedId = searchParams.get("breed") || "";

  const [moreToLoad, setMoreToLoad] = useState(true);

  // Conditionally set SWR key to avoid unnecessary requests
  const getKey = (pageIndex: number, previousPageData: Cat[]) => {
    if (previousPageData && !previousPageData.length) {
      setMoreToLoad(false);
      return null;
    }
    if (!breedId) return null;
    return `/api/cats?pageIndex=${pageIndex}&breedId=${breedId}`;
  };

  const { data, size, setSize, error, isLoading } = useSWRInfinite(
    getKey,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    }
  );

  if (error)
    return (
      <p>
        Apologies but we could not load new cats for you at this time! Miau!
      </p>
    );

  // Add new cats to previous cats
  const cats: Cat[] = data ? [].concat(...data) : [];
  // Filter cats so only unique cat ids included
  const filteredCats: Cat[] = cats.filter((cat, index, self) => {
    return index === self.findIndex((i) => i.id === cat.id);
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredCats &&
        filteredCats.map((cat: Cat) => (
          <div key={cat.id} className="m-4">
            <div className="h-[250px] mb-2">
              <Link href={`/${cat.id}`}>
                <img
                  className="w-full h-full rounded-lg object-cover hover:shadow-[0_2px_12px_0_rgba(0,0,0,0.3)]"
                  src={cat.url}
                  alt={"Photo of a cat from The Cat API"}
                />
              </Link>
            </div>
            <Link href={`/${cat.id}`} className="text-sm hover:underline">
              View Details
            </Link>
          </div>
        ))}
      {moreToLoad && data && (
        <Button onClick={() => setSize(size + 1)}>Load more</Button>
      )}
      {isLoading && <ImageSkeleton />}
    </div>
  );
};

export default Cats;
