type categoryType = {
  category: string;
};

export const Category = ({ category }: categoryType) => {
  return (
    <div className="flex justify-between items-center">
      <span className="font-bold text-2xl">{category}</span>

      <button className="flex items-center gap-1 text-sm font-medium hover:underline">
        See More <img src="/ar.svg" alt="" className="w-4 h-4" />
      </button>
    </div>
  );
};
