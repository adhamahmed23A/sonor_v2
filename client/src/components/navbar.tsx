import { NavLink } from "react-router";
import Logo from "./logo";
import { NAVBAR } from "@/constants/navbar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ui/mode-toggle";

export const Navbar = () => {
  return (
    <>
      <nav className="w-full h-fit bg-background/60 backdrop-blur-md transition-all duration-200">
        <div className="max-w-6xl mx-auto py-2 px-6 flex justify-between items-center">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <div className="hidden lg:flex justify-center items-center gap-2 ">
            <div className="flex gap-4 items-center">
              {NAVBAR.links.map(({ name, href }) => (
                <NavLink key={name} to={href}>
                  <p className="text-sm tracking-normal hover:text-primary duration-200 ">
                    {name}
                  </p>
                </NavLink>
              ))}
            </div>
            <Separator orientation="vertical" className="h-5 my-auto" />
            <ModeToggle />
            <Separator orientation="vertical" className="h-5 my-auto" />
            <div className="flex justify-center items-center gap-2">
              <Button variant={"ghost"} className="button">
                Sign in
              </Button>
              <Button className="button">Get started</Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
