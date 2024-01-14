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
    <div className="flex flex-col h-full">
      {checkQuery === "" ? (
        <div className="flex w-full h-[calc(100vh-300px)] items-center">
          <div className="flex flex-col w-full gap-4 items-center">
            <Logo />
            <Breeds />
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <Cats />
    </div>
  );
}
