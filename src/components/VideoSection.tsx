import React from "react";
import videoData from "../data/data.json";

export const VideoSection: React.FC = () => {
  const videos = videoData.videos;
  return (
    <div className="grid h-full w-full grid-cols-1 gap-4 overflow-y-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {videos.map((item, index) => {
        return (
          <div
            key={index}
            className="flex cursor-pointer flex-col gap-2 duration-300 ease-in-out hover:transition"
          >
            <video
              src={item.videoUrl}
              autoPlay={false}
              loop
              muted
              className="rounded-sm duration-300 hover:rounded-none hover:transition md:rounded-lg"
            ></video>
            <div className="flex w-full items-start gap-1">
              <div className="h-9 w-9 overflow-hidden rounded-full bg-orange-400">
                <img
                  src={item.thumbnailUrl}
                  alt={item.author}
                  className=" h-full w-full object-cover object-center"
                />
              </div>
              <div className="w-[calc(100%-36px)]">
                <span className=" line-clamp-2 font-semibold leading-5">
                  {item.title}
                </span>
                <span className="line-clamp-1 text-xs">{item.author}</span>
                <span className="line-clamp-1 text-xs text-gray-400">
                  {item.uploadTime}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
