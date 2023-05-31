import { subMenus, subMenuName } from "@/atoms/menu";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useAtom } from "jotai";
import React from "react";

function NavSubLink({ links }: any,) {
  const [isOpen, setIsOpen] = useAtom(subMenus);
  const [subMenu, setSubMenu] = useAtom(subMenuName);
  return (
    <>
    <div className="hamburger-submenu">
      
      <p
        className="font-semibold lg:pb-5 uppercase text-sm"
        onClick={() => {
          setIsOpen(true);
          setSubMenu(links);
        }}
      >
        {links.label}
      </p>
     
      <span className="lg:hidden"><ChevronRightIcon className="w-6 h-6" /></span>
      <div className="hidden lg:block">
        {links.category &&
          links.category.map((item: any, index: number) => (
            <p className="pb-5 text-xs" key={index}>
              {item.name}
            </p>
          ))}
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-0 left-0 bg-white h-screen w-full">
          <p
            className="flex justify-start p-5 text-red-600"
            onClick={() => setIsOpen(false)}
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
          {subMenu?.category?.map((item: any, index: number) => {
            return (
              <p className="category-menu flex justify-between lg:py-8 py-6 mx-6 lg:mx-0 text-sm font-thin" key={index}>
                {item.name}
              </p>
            );
          })}
        </div>
      )}
    </div>
    <div className="submenu-border lg:hidden"></div>
    </>
  );
}

export default NavSubLink;
