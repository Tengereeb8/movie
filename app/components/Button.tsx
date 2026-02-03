import { Button } from "@/components/ui/button";

export function ButtonDefault() {
  return (
    <Button className="w-36.25 h-10 lg:bg-white bg-black lg:text-black text-white mt-4 flex ">
      <img src="/play.svg" alt="" className="w-4 h-4 lg:block hidden" />
      <img src="/wplay.svg" alt="" className="w-4 h-4 lg:hidden block" />
      Watch Trailer
    </Button>
  );
}
