import { useEffect } from "react";
import { Banner } from "./banner";
import { Navbar } from "./navbar";
import { useAnimate } from "motion/react";

const Header = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate([
      [
        scope.current.children[0], // Banner
        { opacity: [0, 1], y: [-20, 0] },
        { duration: 0.4, ease: "easeOut" },
      ],
      [
        scope.current.children[1], // Navbar
        { opacity: [0, 1] },
        { duration: 0.4, ease: "easeOut", at: "-0.03" }, // 0.2s after Banner starts
      ],
    ]);
  }, [animate, scope]);
  return (
    <header className="w-full fixed top-0 inset-x-0 transition-all duration-200 z-50">
      <div ref={scope} className="flex flex-col justify-center items-center">
        <Banner />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
