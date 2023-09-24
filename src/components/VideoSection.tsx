import React, { useState } from "react";
import videoData from "../data/data.json";

export const VideoSection: React.FC = () => {
  const videos = videoData.videos;
  const [isHovered, setIsHovered] = useState(
    new Array(videos.length).fill(false),
  );

  const handleMouseEnter = (index: number) => {
    console.log("enter");
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = true;
    setIsHovered(updatedHoverState);
  };

  const handleMouseLeave = (index: number) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = false;
    setIsHovered(updatedHoverState);
  };

  // not working hover !!!

  return (
    <div className="grid h-full w-full grid-cols-1 gap-4 overflow-y-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {videos.map((item, index) => {
        return (
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            key={index}
            className="flex cursor-pointer flex-col gap-2"
          >
            <video
              src={item.videoUrl}
              autoPlay={isHovered[index]}
              loop
              muted
              className="rounded-sm md:rounded-lg"
            ></video>
            <div className="flex items-start gap-1">
              <div className="h-9 w-9 rounded-full bg-orange-400"></div>
              <div className="">
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
