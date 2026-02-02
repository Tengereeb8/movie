type MovieCardProps = {
  img: string;
  rating: number;
  title: string;
};

export const MovieCard = (props: MovieCardProps) => {
  const { img, rating, title } = props;
  return (
    <div className="h-110 w-57.5  rounded-lg bg-[#f4f4f5]">
      <img src={img} alt="" className="rounded-t-lg h-85 w-57.5" />
      <div className="flex gap-1 pl-2 pt-2">
        <img src="/Star.svg" alt="" />
        <p>
          {rating} <span className="text-[#71717a]">/10</span>
        </p>
      </div>
      <p className="pl-2">{title}</p>
    </div>
  );
};
