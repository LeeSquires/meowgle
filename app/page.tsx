import Breeds from "@/app/breeds";
import Cats from "@/app/cats";
import Logo from "@/components/layout/logo";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  // Check if search query is present to hide logo and search bar
  const checkQuery = searchParams.breed || "";

  return (
    <div className="flex flex-col">
      {checkQuery === "" ? (
        <div className="flex w-full h-[calc(100vh-300px)] items-start sm:items-center">
          <div className="flex flex-col w-full gap-4 items-center py-12 sm:py-0 px-4 sm:px-0">
            <Logo />
            <Breeds />
          </div>
        </div>
      ) : (
        <Cats />
      )}
    </div>
  );
}
