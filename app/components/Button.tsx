import { Button } from "@/components/ui/button";

export function ButtonDefault() {
  return (
    <Button className="w-36.25 h-10 bg-white text-black mt-4 flex ">
      <img src="/play.svg" alt="" className="w-4 h-4" />
      Watch Trailer
    </Button>
  );
}
