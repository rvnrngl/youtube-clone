import React from "react";
import {
  BiDotsHorizontalRounded,
  BiPlay,
  BiSolidDislike,
  BiSolidLike,
  BiSolidMessageDetail,
  BiSolidShare,
  BiSolidUser,
  BiSolidVolumeFull,
} from "react-icons/bi";

export const Short: React.FC = () => {
  return (
    <div className="h-[calc(100vh-130px)] w-full max-w-[430px] snap-start sm:h-[600px]">
      <div className="flex h-full w-full justify-center">
        {/* video */}
        <div className="flex w-[350px] flex-col justify-between rounded-lg bg-black py-4 text-white">
          <div className="flex items-center justify-between px-4">
            <BiPlay size={30} className="cursor-pointer" />
            <BiSolidVolumeFull size={20} className="cursor-pointer" />
          </div>
          <div className="flex flex-col justify-center gap-3 px-4">
            <span className="text-sm">Details here....</span>
            <div className="flex items-center justify-between">
              <div className="flex cursor-pointer items-center gap-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-black">
                  <BiSolidUser />
                </div>
                <span className=" line-clamp-1">@RavenRingel</span>
              </div>
              <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:brightness-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* reactions */}
        <div className="hidden flex-col justify-end gap-3 px-3 sm:flex">
          <div className="flex cursor-pointer flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 hover:brightness-95">
              <BiSolidLike size={25} />
            </div>
            <span className="text-sm">Like</span>
          </div>
          <div className="flex cursor-pointer flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 hover:brightness-95">
              <BiSolidDislike size={25} />
            </div>
            <span className="text-sm">Dislike</span>
          </div>
          <div className="flex cursor-pointer flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 hover:brightness-95">
              <BiSolidMessageDetail size={25} />
            </div>
            <span className="text-sm">1K</span>
          </div>
          <div className="flex cursor-pointer flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 hover:brightness-95">
              <BiSolidShare size={25} />
            </div>
            <span className="text-sm">Share</span>
          </div>
          <div className="flex cursor-pointer flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 hover:brightness-95">
              <BiDotsHorizontalRounded size={25} />
            </div>
            <span className="text-sm">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};
