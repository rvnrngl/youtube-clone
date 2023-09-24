import React from "react";
import { BiHome, BiBoltCircle, BiWindows, BiLibrary } from "react-icons/bi";

export const SideMenu: React.FC = () => {
  return (
    <aside className="fixed left-0 top-16 z-10 hidden flex-col items-center justify-center px-1 md:flex">
      <button className="flex flex-col items-center justify-center gap-1 rounded-lg px-4 py-3 hover:bg-neutral-200/50 md:rounded-md md:px-6">
        <BiHome className="text-2xl" />
        <span className="text-[0.7rem]">Home</span>
      </button>
      <button className="flex flex-col items-center justify-center gap-1 rounded-lg px-4 py-3 hover:bg-neutral-200/50 md:rounded-md md:px-6">
        <BiBoltCircle className="text-2xl" />
        <span className="text-[0.7rem]">Shorts</span>
      </button>
      <button className="flex flex-col items-center justify-center gap-1 rounded-lg px-4 py-3 hover:bg-neutral-200/50 md:rounded-md md:px-6">
        <BiWindows className="text-2xl" />
        <span className="text-[0.7rem]">Subs</span>
      </button>
      <button className="flex flex-col items-center justify-center gap-1 rounded-lg px-4 py-3 hover:bg-neutral-200/50 md:rounded-md md:px-6">
        <BiLibrary className="text-2xl" />
        <span className="text-[0.7rem]">Library</span>
      </button>
    </aside>
  );
};
