import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import NavSubLink from "../../atoms/NavSubLink";

const NavLink = (props: any) => {
  const { name, index, handleClick, activeItem, menu, isOpen } = props;

  return (
    <>
      <div
        className={`mobile-menu ${activeItem === name ? "active" : ""}`}
        key={index}
      >
        <p
          className="lg:captilize xs:uppercase font-semibold text-sm"
          onClick={() => handleClick(name)}
        >
          {name}
        </p>

        {menu.submenu && (
          <>
            {activeItem === name ? (
              <span className="hidden lg:inline">
                <ChevronUpIcon className="w-6 h-6" />
              </span>
            ) : (
              <span className="lg:hidden">
                <ChevronRightIcon className="w-6 h-6" />
              </span>
            )}
            {activeItem !== name && (
              <span className="hidden lg:inline">
                <ChevronDownIcon className="w-6 h-6" />
              </span>
            )}
          </>
        )}
        {isOpen === name && menu.submenu && (
          <>
            <div className="submenu">
              <div className="lg:flex block absolute  py-4 lg:top-[114px] top-[150px] left-0 bg-white w-full">
                <p
                  className="flex justify-start p-6 text-red-600 lg:hidden"
                  onClick={() => handleClick(name)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                    />
                  </svg>
                  Back
                </p>
                {menu.submenu.map((item: any, index: number) => {
                  return <NavSubLink links={item} key={index} />;
                })}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="submenu-border lg:hidden"></div>
    </>
  );
};

export default NavLink;
