import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Nav = () => {
  return (
    <nav className=" md:max-w-360 w-screen  mx-auto h-15 items-center flex lg:px-20 px-5 justify-between ">
      <Link
        className="text-indigo-700 flex items-center gap-2 font-sans"
        href="/"
      >
        <Image src="/film.svg" alt="Film icon" width={20} height={20} />
        Movie Z
      </Link>

      <nav className="flex gap-3">
        <NavigationMenu className="">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-[#ffffff] hover:bg-white ">
                <p>
                  <span className="hidden lg:block">Genre</span>
                  <span className="flex lg:hidden"></span>
                </p>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="w-83.75 h-128.25 lg:w-144.25 lg:h-83.25">
                  <h1 className="text-2xl font-bold">Genres</h1>
                  <p className="border-b border-b-[#E4E4E7] pt-1 pb-4">
                    See lists of movies by genre
                  </p>

                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <span className="flex items-center gap-1 text-xs">
                        Action <img src="/cr.svg" className="w-4 h-4" />
                      </span>
                    </Badge>

                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <span className="flex items-center gap-1 text-xs">
                        Adventure <img src="/cr.svg" className="w-4 h-4" />
                      </span>
                    </Badge>

                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Animation
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Biography
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Comedy
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Crime
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Documentary
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Drama
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Family
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Fantasy
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Film Noir
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Game-Show
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        History
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Horror
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Music
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Musical
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Mystery
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        News
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Reality-TV
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Romance
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Sci-Fi
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Short
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Sport
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Talk-Show
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Thriller
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        War
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                    <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
                      <p className="flex items-center text-xs">
                        Western
                        <span>
                          <img src="/cr.svg" alt="" className="w-4 h-4" />
                        </span>
                      </p>
                    </Badge>
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div></div>
        <search className="md:flex hidden gap-2.5 border border-[#e4e4e7] rounded-md items-center w-95 h-9 pl-3">
          <img src="/searvh.svg" alt="" className="w-4 h-4 " />
          <span className="text-[#71717a]">Search...</span>
        </search>
      </nav>
      <div className="flex gap-3">
        <search className="md:hidden flex gap-2.5 border border-[#e4e4e7] rounded-md items-center w-9 h-9 justify-center">
          <img src="/searvh.svg" alt="" className="w-4 h-4 " />
        </search>
        <nav className="w-9 h-9 border border-[#e4e4e7] rounded-md flex items-center justify-center">
          <img src="/moon.svg" alt="" />{" "}
        </nav>
      </div>
    </nav>
  );
};
