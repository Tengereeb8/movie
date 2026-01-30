export const Nav = () => {
  return (
    <nav className="min-w-fit h-15 items-center flex ml-20 mr-20 justify-between ">
      <div className="text-indigo-700 flex items-center gap-2 font-sans ">
        <img src="/film.svg" alt="" />
        Movie Z
      </div>
      <nav className="flex gap-3">
        <span className="flex gap-2 border border-[#e4e4e7] w-24.25 rounded-md justify-center h-9 items-center">
          <img src="/chev.svg" alt="" className="w-4 h-4 " />
          Genre
        </span>
        <div></div>
        <search className="flex gap-2.5 border border-[#e4e4e7] rounded-md items-center w-95 h-9 pl-3">
          <img src="/searvh.svg" alt="" className="w-4 h-4 " />
          <span className="text-[#71717a]">Search...</span>
        </search>
      </nav>
      <nav className="w-9 h-9 border border-[#e4e4e7] rounded-md flex items-center justify-center">
        <img src="/moon.svg" alt="" />
      </nav>
    </nav>
  );
};
