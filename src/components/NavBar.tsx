import React from "react";
import {
  BiMenu,
  BiVideoPlus,
  BiBell,
  BiMicrophone,
  BiSearch,
} from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 z-10 flex h-16 w-full items-center bg-white">
      <div className="grid w-full grid-cols-2 items-center justify-between px-4 py-2 md:grid-cols-4 md:px-6">
        {/* left nav */}
        <div className="col-span-1 flex items-center md:gap-5">
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-neutral-200">
            <BiMenu className="cursor-pointer text-[1.6rem]" />
          </div>
          <Link to="/" className="flex cursor-pointer items-center gap-1">
            <BsYoutube className="text-3xl text-red-500" />
            <span className="font-roboto text-xl font-bold">Youtube</span>
          </Link>
        </div>
        {/* middle nav */}
        <div className="col-span-2 hidden w-full items-center gap-2 px-4 md:flex">
          <div className="flex w-full items-center overflow-hidden rounded-full border border-neutral-300 pl-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
            />
            <div className="h-full cursor-pointer border-l bg-neutral-100 px-6 py-[6px] hover:brightness-95">
              <BiSearch className="text-2xl" />
            </div>
          </div>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-200 hover:brightness-95">
            <BiMicrophone className="text-xl" />
          </div>
        </div>
        {/* right nav */}
        <div className="col-span-1 flex items-center justify-end md:gap-4">
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-neutral-200 md:hidden">
            <BiSearch className="text-2xl" />
          </div>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-neutral-200">
            <BiVideoPlus className="text-2xl" />
          </div>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-neutral-200">
            <BiBell className="text-2xl" />
          </div>
          <div className="flex h-10 w-10 cursor-pointer items-center  justify-center overflow-hidden rounded-full bg-neutral-400 hover:bg-neutral-200">
            <img
              src="https://i.pinimg.com/1200x/8d/ec/23/8dec23953cb4b536f0cf0b7734944e6c.jpg"
              alt="user"
              className="w-ful h-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
