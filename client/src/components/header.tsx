import { Banner } from "./banner";
import { Navbar } from "./navbar";

const Header = () => {
  return (
    <header className="w-full fixed top-0 inset-x-0 transition-all duration-200 z-50">
      <div className="flex flex-col justify-center items-center">
        <Banner />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
