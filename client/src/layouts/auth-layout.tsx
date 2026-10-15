import { Highlighter } from "@/components/ui/highlighter";
import WorldMap from "@/components/ui/world-map";
import { WORLD_MAP_DOTS } from "@/constants/world-map";
import { ArrowLeftCircle } from "lucide-react";
import { Link, Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground antialiased grid grid-cols-2 ">
        <div className="col-span-1 justify-self-center self-center flex flex-col gap-4 ">
          <Link to="/">
            <ArrowLeftCircle className="text-hover duration-200 cursor-pointer" />
          </Link>
          <Outlet />
        </div>
        <div className="hidden lg:col-span-1 lg:block my-auto">
          <div className="flex flex-col gap-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center tracking-tight leading-[0.97]">
              <Highlighter action="underline" color="#1447e6">
                Join
              </Highlighter>{" "}
              our{" "}
              <Highlighter action="underline" color="#1447e6">
                community
              </Highlighter>{" "}
              now
            </h1>
            <WorldMap dots={WORLD_MAP_DOTS} />
          </div>
        </div>
      </div>
    </>
  );
};
