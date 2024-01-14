"use client";

import Breeds from "../../app/breeds";
import { useSearchParams } from "next/navigation";
import Logo from "./logo";
import Link from "next/link";

// Client component to determine if <Breeds /> should be shown in <Header />
export default function ShowHideBreeds() {
  const searchParams = useSearchParams();
  const checkQuery = searchParams.get("breed") || "";

  // If no search query, hide <Breeds />
  return (
    <div className="w-full">
      {checkQuery === "" ? (
        <div></div>
      ) : (
        <div className="flex flex-row gap-4">
          <Link className="w-[120px]" href="/">
            <Logo />
          </Link>
          <Breeds />
        </div>
      )}
    </div>
  );
}
