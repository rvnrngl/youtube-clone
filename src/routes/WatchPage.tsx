import React from "react";
import videoData from "../data/data.json";
import { useQuery } from "../hooks/useQuery";
import { Keywords } from "../components/Keywords";
import { VideosColumn } from "../components/VideosColumn";
import {
  BiArrowToBottom,
  BiDotsHorizontalRounded,
  BiLike,
  BiShare,
} from "react-icons/bi";

const WatchPage: React.FC = () => {
  const query = useQuery();
  const id = query.get("id");
  const videos = videoData.videos;

  const [info] = videos.filter((video) => video.id === id);

  return (
    <main className="mt-[80px] grid w-full grid-cols-1 gap-6 px-6 lg:grid-cols-6 lg:px-20">
      <div className="col-span-4 flex w-full flex-col gap-3">
        <video
          src={info.videoUrl}
          controls
          autoPlay
          className="aspect-video rounded-lg"
        ></video>
        {/* description */}
        <div className="flex w-full flex-col gap-2">
          <h2 className="text-lg font-semibold">{info.title}</h2>
          <div className="flex w-full flex-col justify-between gap-3 md:flex-row md:items-center md:gap-0">
            {/* first layer */}
            <div className="flex items-center gap-2">
              {/* author image */}
              <div className="h-10 w-10 overflow-hidden rounded-full">
                <img
                  src={info.thumbnailUrl}
                  alt={info.author}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* author name and subs */}
              <div className="mr-3 flex flex-col">
                <h3 className="font-semibold">{info.author}</h3>
                <p className="text-xs text-gray-500">{info.subscriber}</p>
              </div>
              {/* sub button */}
              <button className="rounded-full bg-black px-4 py-[5px] text-white">
                Subscribe
              </button>
            </div>
            {/* buttons */}
            <div className="flex items-center gap-2">
              <div className="min-w-10 flex h-10 cursor-pointer items-center justify-center gap-3 rounded-full bg-neutral-200/60 px-4">
                <div className="flex gap-1">
                  <BiLike size={20} />
                  <span className="text-sm font-semibold">Like</span>
                </div>
                <div className="h-5 w-0 border border-neutral-400"></div>
                <BiLike size={20} />
              </div>
              <div className="min-w-10 flex h-10 cursor-pointer items-center justify-center gap-1 rounded-full bg-neutral-200/60 px-4">
                <BiShare size={20} />
                <span className="text-sm font-semibold">Share</span>
              </div>
              <div className="min-w-10 hidden h-10 cursor-pointer items-center justify-center gap-1 rounded-full bg-neutral-200/60 px-4 sm:flex md:hidden xl:flex">
                <BiArrowToBottom size={20} />
                <span className="text-sm font-semibold">Download</span>
              </div>
              <div className="min-w-10 hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-200/60 sm:flex md:hidden xl:flex">
                <BiDotsHorizontalRounded size={20} />
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg bg-neutral-200/60 p-3">
            <div className="full mb-2 flex items-center gap-2 text-sm font-semibold">
              <span>{info.views}</span>
              <span>Premiered {info.uploadTime}</span>
              <span className="text-blue-700">
                #{info.title.replace(/\s/g, "")}
              </span>
            </div>
            {/* details */}
            <p className="text-sm">{info.description}</p>
          </div>
        </div>
      </div>
      <div className=" col-span-4 flex w-full flex-col gap-3 lg:col-span-2">
        <Keywords />
        <VideosColumn videos={videos} />
      </div>
    </main>
  );
};

export default WatchPage;
