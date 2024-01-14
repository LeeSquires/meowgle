"use client";

import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CatBreed } from "@/types/cat.types";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import useSWR, { mutate } from "swr";
import fetcher from "@/lib/fetcher";
import Image from "next/image";
import VoiceIcon from "@/public/voice.svg";
import ImageIcon from "@/public/image.svg";
import { Search } from "lucide-react";

const Breeds: FC = () => {
  const router = useRouter();

  const swrKey = "https://api.thecatapi.com/v1/breeds";

  const {
    data: breeds,
    error,
    isLoading,
  } = useSWR<CatBreed[]>(swrKey, fetcher);

  const searchParams = useSearchParams();
  const breedId = searchParams.get("breed") || "";

  const handleSelectChange = (value: string) => {
    router.push(`?breed=${value}`);
  };

  return (
    <Select
      onValueChange={(value) => handleSelectChange(value)}
      value={breedId}
    >
      <SelectTrigger>
        <Search className="p-1"/>
        <SelectValue />
        <div className="flex flex-row gap-4">
          <Image src={VoiceIcon} alt="" height={24} width={24} />
          <Image src={ImageIcon} alt="" height={24} width={24} />
        </div>
      </SelectTrigger>
      <SelectContent>
        {breeds &&
          breeds.map((breed: CatBreed) => (
            <SelectItem key={breed.id} value={breed.id}>
              {breed.name}
            </SelectItem>
          ))}
        {isLoading && <SelectItem value="loading">Loading...</SelectItem>}
      </SelectContent>
    </Select>
  );
};

export default Breeds;
