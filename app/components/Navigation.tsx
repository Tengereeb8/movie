// import Link from "next/link";
// import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
// "use client"

// import * as React from "react"
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// export function ModeToggle() {
//   const { setTheme } = useTheme()

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="icon">
//           <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
//           <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";

// export const Nav = () => {
//   return (
//     <nav className=" md:max-w-360 w-screen  mx-auto h-15 items-center flex lg:px-20 px-5 justify-between ">
//       <Link
//         className="text-indigo-700 flex items-center gap-2 font-sans"
//         href="/"
//       >
//         <Image src="/film.svg" alt="Film icon" width={20} height={20} />
//         Movie Z
//       </Link>

//       <nav className="flex gap-3">
//         <NavigationMenu className="">
//           <NavigationMenuList>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger className="bg-[#ffffff] hover:bg-white ">
//                 <p>
//                   <span className="hidden lg:block">Genre</span>
//                   <span className="flex lg:hidden"></span>
//                 </p>
//               </NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <NavigationMenuLink className="w-83.75 h-128.25 lg:w-144.25 lg:h-83.25">
//                   <h1 className="text-2xl font-bold">Genres</h1>
//                   <p className="border-b border-b-[#E4E4E7] pt-1 pb-4">
//                     See lists of movies by genre
//                   </p>

//                   <div className="flex flex-wrap gap-2 mt-1">
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <span className="flex items-center gap-1 text-xs">
//                         Action <img src="/cr.svg" className="w-4 h-4" />
//                       </span>
//                     </Badge>

//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <span className="flex items-center gap-1 text-xs">
//                         Adventure <img src="/cr.svg" className="w-4 h-4" />
//                       </span>
//                     </Badge>

//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Animation
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Biography
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Comedy
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Crime
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Documentary
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Drama
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Family
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Fantasy
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Film Noir
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Game-Show
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         History
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Horror
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Music
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Musical
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Mystery
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         News
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Reality-TV
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Romance
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Sci-Fi
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Short
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Sport
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Talk-Show
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Thriller
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         War
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                     <Badge className="w-fit bg-white text-black flex justify-around items-center border border-[#E4E4E7] mt-4">
//                       <p className="flex items-center text-xs">
//                         Western
//                         <span>
//                           <img src="/cr.svg" alt="" className="w-4 h-4" />
//                         </span>
//                       </p>
//                     </Badge>
//                   </div>
//                 </NavigationMenuLink>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>
//         <div></div>
//         <search className="md:flex hidden gap-2.5 border border-[#e4e4e7] rounded-md items-center w-95 h-9 pl-3">
//           <img src="/searvh.svg" alt="" className="w-4 h-4 " />
//           <span className="text-[#71717a]">Search...</span>
//         </search>
//       </nav>
//       <div className="flex gap-3">
//         <search className="md:hidden flex gap-2.5 border border-[#e4e4e7] rounded-md items-center w-9 h-9 justify-center">
//           <img src="/searvh.svg" alt="" className="w-4 h-4 " />
//         </search>
//         <nav className="w-9 h-9 border border-[#e4e4e7] rounded-md flex items-center justify-center">
//           <img src="/moon.svg" alt="" />{" "}
//         </nav>
//       </div>
//     </nav>
//   );
// };
"use client";

import * as React from "react";
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
import { ModeToggle } from "@/components/ui/mode-toggle";

const GENRES = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "Game-Show",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
];

export const Nav = () => {
  return (
    <nav className="md:max-w-360 w-screen mx-auto h-15 items-center flex lg:px-20 px-5 justify-between">
      <Link
        className="text-indigo-700  items-center gap-2 font-sans hidden lg:flex"
        href="/"
      >
        <Image src="/film.svg" alt="Film icon" width={20} height={20} />
        <span className="font-bold">Movie Z</span>
      </Link>

      <div className="flex items-center gap-3">
        {/* Genre Dropdown */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                <span className="hidden lg:block">Genre</span>
                <span className="lg:hidden"></span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-6 w-80 lg:w-[500px]">
                  <h1 className="text-2xl font-bold">Genres</h1>
                  <p className="border-b border-zinc-200 dark:border-zinc-800 pt-1 pb-4 mb-4 text-muted-foreground">
                    See lists of movies by genre
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {GENRES.map((genre) => (
                      <Badge
                        key={genre}
                        variant="outline"
                        className="cursor-pointer hover:bg-secondary flex items-center gap-1"
                      >
                        {genre}
                        <img
                          src="/cr.svg"
                          className="w-3 h-3 opacity-50 dark:hidden"
                          alt=""
                        />
                        <img
                          src="/wcr.svg"
                          alt=""
                          className="w-3 h-3 opacity-50 hidden dark:flex"
                        />
                      </Badge>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="md:flex hidden gap-2.5 border border-zinc-200 dark:border-zinc-800 rounded-md items-center w-64 h-9 pl-3">
          <img
            src="/searvh.svg"
            alt=""
            className="w-4 h-4 opacity-50 dark:hidden"
          />
          <img
            src="/wmg.svg"
            alt=""
            className="w-4 h-4 opacity-50 dark:flex hidden"
          />
          <span className="text-muted-foreground text-sm">Search...</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="md:hidden flex border border-zinc-200 dark:border-zinc-800 rounded-md items-center w-9 h-9 justify-center cursor-pointer">
          <img src="/searvh.svg" alt="" className="w-4 h-4 dark:hidden" />
          <img src="/wmg.svg" alt="" className="w-4 h-4 dark:flex hidden" />
        </div>

        <ModeToggle />
      </div>
    </nav>
  );
};
