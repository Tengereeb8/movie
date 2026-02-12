"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface TrailerModalProps {
  backdropPath: string;
  movieTitle: string;
  trailerKey: string;
}

export function TrailerModal({
  backdropPath,
  movieTitle,
  trailerKey,
}: TrailerModalProps) {
  return (
    <div className="lg:w-249.25 lg:h-full w-93.75 h-53">
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative flex-1 group cursor-pointer overflow-hidden rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/original${backdropPath}`}
              alt="Trailer Backdrop"
              className="w-full aspect-video object-cover lg:h-107 transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all" />

            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center gap-2 sm:gap-3">
              <div className="bg-white rounded-full p-2 sm:p-3 shadow-md hover:scale-110 transition-transform">
                <img
                  src="/play.svg"
                  alt="play"
                  className="w-4 h-4 sm:w-6 sm:h-6"
                />
              </div>

              <p className="text-white text-sm sm:text-base font-semibold drop-shadow-md">
                Play trailer
              </p>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="lg:min-w-249.25  lg:h-fit  p-0 overflow-hidden">
          <DialogHeader>
            <VisuallyHidden>
              <DialogTitle>{movieTitle} Trailer</DialogTitle>
              <DialogDescription>
                Official trailer for {movieTitle}
              </DialogDescription>
            </VisuallyHidden>
          </DialogHeader>
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              title={`${movieTitle} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
