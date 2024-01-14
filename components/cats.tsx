"use client";

import Link from "next/link";
import { Cat } from "@/types/cat.types";
import { FC } from "react";
import useSWR, { mutate } from "swr";
import fetcher from "@/lib/fetcher";
import { useSearchParams } from "next/navigation";
import ImageSkeleton from "./image-skeleton";

const Cats: FC = () => {
  const searchParams = useSearchParams();
  const breedId = searchParams.get("breed") || "";

  // Only send request for cats if a breed has been selected, else it shows random images
  const swrKey = breedId ? `https://api.thecatapi.com/v1/images/search?limit=10&breed_id=${breedId}` : "";

  const { data: cats, error, isLoading } = useSWR<Cat[]>(swrKey, fetcher);

  if (error)
    return (
      <p>
        Apologies but we could not load new cats for you at this time! Miau!
      </p>
    );

  return (
    <div className="grid grid-cols-3 gap-4">
      {cats &&
        cats.map((cat: Cat) => (
          <div key={cat.id} className="max-w-[33%]">
              <div className="w-[300px] h-[300px]">
                <img
                  className="object-cover w-full h-full"
                  src={cat.url}
                  alt={"Photo of a cat from The Cat API"}
                />
              </div>
              <Link
                className="block text-center mt-2 bg-blue-500 text-white py-2 rounded"
                href={`/${cat.id}`}
              >
                View Details
              </Link>
          </div>
        ))}
        {isLoading && (
          <ImageSkeleton />
        )}
    </div>
  );
};

export default Cats;
