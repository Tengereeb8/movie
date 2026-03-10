type MovieList = {
  title: string;
  img: string;
  rate: number;
  id: number;
};

const Movies = ({ img, rate, title }: MovieList) => {
  const basImgurl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="bg-[#F4F4F5] dark:bg-[#27272A] rounded-lg min-w-[157.5px] min-h-[309.0999755859375px] w-full h-full  cursor-pointer hover:scale-103 hover:shadow-sm transition-transform duration-300 ease-in-out">
      <img
        className="object-cover w-full aspect-2/3 rounded-t-lg"
        src={basImgurl + img}
        alt="Movie"
      />
      <div className="p-2 flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <img
            className="h-4 w-4 object-cover"
            src="/HeroCarousel/Vector.svg"
            alt="Star review"
          />
          <p className="text-[12px] font-medium text-[#09090B] xl:text-[14px] dark:text-[#fafafa]">
            {rate}
            <span className="font-normal  text-[#71717A]">/10</span>
          </p>
        </div>
        <p className="text-sm text-[#09090B] xl:text-[18px] dark:text-[#fafafa]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Movies;
