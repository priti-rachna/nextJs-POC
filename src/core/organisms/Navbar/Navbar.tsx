import { useState } from "react";
import data from "../../../json/data.json";
import NavLink from "../../molecules/NavLink";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faPhone);
function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (item: any) => {
    setIsOpen((prevItem) => (prevItem === item ? null : item));
  };

  return (
    <>
      <div className="block lg:flex pt-2 justify-between h-screen lg:h-auto">
        {data.menu.map((menuItem, index) => {
          
          return (
            
            <NavLink
              name={menuItem.name}
              index={index}
              key={index}
              handleClick={handleClick}
              activeItem={isOpen}
              menu={menuItem}
              isOpen={isOpen}
              submenu={menuItem.submenu || []}
            />
           
          );
        })} 
         <div className="border-2  border-red-500 items-center m-auto lg:hidden ">
             <Link href="#" className="utility-class  lg:hidden lg:py-0 py-8 pl-[40%]">
            <FontAwesomeIcon icon={faPhone} className="font-awesome" />
            <span className="utility-text text-sm/[20px] font-semibold">1-800-955-1925</span>
          </Link>
      </div>        
      </div>
     
    </>
  );
}
export default MenuBar;
