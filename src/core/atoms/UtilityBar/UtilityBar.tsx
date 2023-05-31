import React from "react";
import Link from "next/link";
import { faAddressBook, faSearch, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faAddressBook, faSearch, faPhone, faUser );


const utilityBar = () => {
  return (
    <>
     
      <div className="py-3 gap-2 lg:flex items-center h-full hidden">
        <Link href="#" className="utility-class">
          <FontAwesomeIcon icon={faAddressBook} className="font-awesome" />
          <span className="utility-text">Request Travel Planning Guide</span>
        </Link>
        <Link href="#" className="utility-class">
          <FontAwesomeIcon icon={faPhone} className="font-awesome" />
          <span className="utility-text">1-800-955-1925</span>
        </Link>
        <Link href="#" className="utility-class">
        <FontAwesomeIcon icon={faUser} className="font-awesome"/>
          <span className="utility-text">Sign In / Register</span>
        </Link>
      </div>
    
    </>
  );
};

export default utilityBar;
