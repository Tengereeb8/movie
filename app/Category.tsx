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
// Category.tsx (or SeeMore.tsx)
import Link from "next/link";

interface CategoryProps {
  category: string;
  href: string;
}

export const Category = ({ category, href }: CategoryProps) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="font-bold text-2xl">{category}</h2>
      <Link
        href={href}
        className="flex items-center gap-1 text-sm font-medium hover:underline"
      >
        See More
        <img src="/ar.svg" alt="Arrow icon" className="w-4 h-4 dark:hidden" />
        <img
          src="/war.svg"
          alt="Arrow icon"
          className="w-4 h-4 dark:block hidden"
        />
      </Link>
    </div>
  );
};
