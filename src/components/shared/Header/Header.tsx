import { mainMenu } from "@/atoms/menu";
import Logo from "@/core/atoms/Logo";
import MobileMenu from "@/core/atoms/MobileMenu/MobileMenu";
import Search from "@/core/atoms/Search";
import UtilityBar from "@/core/atoms/UtilityBar";
import Navbar from "@/core/organisms/Navbar";
import { useAtom } from "jotai";


const Header = () => {
 const [isOpen] = useAtom(mainMenu);
  return (
    <>
      <div className={"container-fluid border-b-2 lg:shadow-lg  bg-white px-0 lg:px-8"}>
        <MobileMenu /> 
        <div className="flex items-center h-full">
          <Logo />
          <div className="lg:flex lg:flex-col block flex-row w-full px-4  max-h-screen h-auto">
            <div className="flex flex-row justify-center lg:justify-between lg:pb-0 pb-[10px] w-full pverflow-auto">
              <Search />
              <UtilityBar />
            </div>
            <div className="hidden lg:block">
            <Navbar />
            </div>
            <div className="block lg:hidden">
            {isOpen && <Navbar />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
