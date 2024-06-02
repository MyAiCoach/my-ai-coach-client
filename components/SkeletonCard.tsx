import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <section className="grid grid-cols-4 gap-5">
      <Skeleton className="w-full h-52 rounded-xl" />
      <Skeleton className="w-full h-52 rounded-xl" />
      <Skeleton className="w-full h-52 rounded-xl" />
      <Skeleton className="w-full h-52 rounded-xl" />
      <Skeleton className="w-full h-72 rounded-xl col-span-3" />
      <Skeleton className="w-full h-72 rounded-xl" />
    </section>
  );
}
