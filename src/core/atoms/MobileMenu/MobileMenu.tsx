import { useAtom } from "jotai";
import { mainMenu } from "../../../atoms/menu";
import Image from "next/image";
import logo from '../../../assets/logo.jpg';
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faUser);

function MobileMenu() {
  const [isOpen, setIsOpen] = useAtom(mainMenu);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-red-500 transition ease transform duration-300`;
  return (
    <>
      <div className="hamburger-menu ">
        <button
          className="flex flex-col h-12 w-12  justify-center items-center group"
          onClick={() => setIsOpen(prevState => !prevState)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-100"
                : "opacity-100 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                : "opacity-100 group-hover:opacity-100"
            }`}
          />
        </button>
        <Image
          src={logo}
          alt="logo"
          width={60}
          height={50}
          className="lg:hidden text-center"
        />
        <Link href="#" className="utility-class">
          <FontAwesomeIcon icon={faUser} className="font-awesome" />
        </Link>
      </div>
    </>
  );
}

export default MobileMenu;
