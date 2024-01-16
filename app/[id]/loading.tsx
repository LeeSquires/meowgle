import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (

    <main className="p-4">
  <Skeleton className="w-[60px] h-[40px] rounded-full" />
      <div className="flex flex-row p-4 pl-0 gap-8">
        <div className="max-w-[600px]">
        <Skeleton className="w-full h-[400] rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
        <Skeleton className="w-[60px] h-[40px] rounded-full" />
          <div className="flex gap-2 items-center">
          <Skeleton className="w-[60px] h-[40px] rounded-full" />
          <Skeleton className="w-[60px] h-[40px] rounded-full" />
          </div>

          <Skeleton className="w-[60px] h-[40px] rounded-full" />
          <Skeleton className="w-[60px] h-[40px] rounded-full" />
        </div>
      </div>
    </main>
  )
}