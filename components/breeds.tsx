"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CatBreed } from "@/types/cat.types";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useSearchParams } from "next/navigation";

interface BreedsProps {
  breeds: CatBreed[];
}

const Breeds: FC<BreedsProps> = (breeds) => {
  const router = useRouter();
  
  const searchParams = useSearchParams();
  const breedId = searchParams.get("breed") || "";

  const handleSelectChange = (_breedId: string) => {   
    router.push(`?breed=${_breedId}`);
  };

  return (
    <Select onValueChange={(value) => handleSelectChange(value)} value={breedId}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select breed" />
      </SelectTrigger>
      <SelectContent>
        {breeds.breeds.map((breed: CatBreed) => (
          <SelectItem key={breed.id} value={breed.id}>
            {breed.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Breeds;
