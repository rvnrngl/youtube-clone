import React, { useState } from "react";
import { BiHome, BiBoltCircle, BiWindows, BiLibrary } from "react-icons/bi";

type Props = {};

export const PopUpSideBarMenu: React.FC = (props: Props) => {
  return (
    <div className="flex w-full flex-col gap-5">
      <a
        href="/"
        className="flex w-full cursor-pointer items-center gap-4 rounded-lg px-4 py-2 hover:bg-neutral-200/60"
      >
        <BiHome size={23} />
        <span>Home</span>
      </a>
      <a
        href="/shorts/asdhdasd"
        className="flex w-full cursor-pointer items-center gap-4 rounded-lg px-4 py-2 hover:bg-neutral-200/60"
      >
        <BiBoltCircle size={23} />
        <span>Shorts</span>
      </a>
      <a
        href="/subscriptions"
        className="flex w-full cursor-pointer items-center gap-4 rounded-lg px-4 py-2 hover:bg-neutral-200/60"
      >
        <BiWindows size={23} />
        <span>Subs</span>
      </a>
      <a
        href="/library"
        className="flex w-full cursor-pointer items-center gap-4 rounded-lg px-4 py-2 hover:bg-neutral-200/60"
      >
        <BiLibrary size={23} />
        <span>Library</span>
      </a>
    </div>
  );
};
