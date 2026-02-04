// import { Skeleton } from "@/components/ui/skeleton";

// const CategorySkeleton = () => (
//   <div className="flex flex-col gap-2">
//     <Skeleton className="w-full h-4 rounded-lg bg-[#f4f4f5] overflow-hidden shadow-sm" />
//   </div>
// );

// type categoryType = {
//   category: string;
// };

// export const Category = ({ category }: categoryType) => {
//   return (
//     <div>
//       <CategorySkeleton />
//       <div className="flex justify-between items-center">
//         <span className="font-bold text-2xl">{category}</span>

//         <button className="flex items-center gap-1 text-sm font-medium hover:underline">
//           See More <img src="/ar.svg" alt="" className="w-4 h-4" />
//         </button>
//       </div>
//     </div>
//   );
// };
import { Skeleton } from "@/components/ui/skeleton";

// 1. Improved Skeleton to match the "Category Title" + "See More" button shape
const CategorySkeleton = () => (
  <div className="flex justify-between items-center w-full">
    <Skeleton className="h-8 w-40 rounded-md bg-muted" />{" "}
    <Skeleton className="h-5 w-20 rounded-md bg-muted" />{" "}
  </div>
);

type categoryType = {
  category: string;
  isLoading?: boolean;
};

export const Category = ({ category, isLoading }: categoryType) => {
  if (isLoading) {
    return <CategorySkeleton />;
  }

  return (
    <div className="flex justify-between items-center">
      <h2 className="font-bold text-2xl">{category}</h2>

      <button className="flex items-center gap-1 text-sm font-medium hover:underline">
        See More
        <img src="/ar.svg" alt="Arrow icon" className="w-4 h-4" />
      </button>
    </div>
  );
};
