"use client";

import Breeds from "../../app/breeds";
import { useSearchParams, useParams } from "next/navigation";
import Logo from "./logo";
import Link from "next/link";

// Client component to determine if <Breeds /> should be shown in <Header />
export default function ShowHideBreeds() {
  // Check if search parameters are present
  const searchParams = useSearchParams();
  const checkQuery = searchParams.get("breed") || "";

  // Check if on single cat page e.g. /[id]
  const params = useParams();

  // Check if params object is empty
  const paramsEmpty = Object.keys(params).length === 0; 

  // If no search query or params, hide <Breeds />
  return (
    <div className="w-full">
      {checkQuery !== "" || !paramsEmpty ? (
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link className="w-[120px]" href="/">
            <Logo />
          </Link>
          <Breeds />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
