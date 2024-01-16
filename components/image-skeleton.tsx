import { Skeleton } from "@/components/ui/skeleton";

export default function ImageSkeleton() {
  const skeletonArray = Array.from({ length: 12 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {skeletonArray.map((_, index) => (
        <div key={index} className="m-4">
          <Skeleton className="w-full h-[250px] rounded-lg" />
          <Skeleton className="w-1/2 h-[20px] rounded-lg mt-4" />
        </div>
      ))}
    </div>
  );
}
