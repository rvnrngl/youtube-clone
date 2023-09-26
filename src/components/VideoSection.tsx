import React, { useRef, useEffect } from "react";
import videoData from "../data/data.json";
import { useNavigate } from "react-router-dom";

export type VideoProps = {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  uploadTime: string;
  views: string;
  author: string;
  videoUrl: string;
  description: string;
  subscriber: string;
  isLive: boolean;
};

export const VideoSection: React.FC = () => {
  const videos = videoData.videos;
  const navigate = useNavigate();
  const videoRefs = useRef<Array<HTMLVideoElement | null>>(
    new Array(videos.length).fill(null),
  );

  const handleEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };

  const handleLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  // Use useEffect to update the videoRefs when the videos array changes
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, [videos]);

  const handleNavigate = (item: VideoProps) => {
    navigate(`/watch?id=${item.id}`);
  };

  return (
    <div className="grid h-full w-full grid-cols-1 gap-4 overflow-y-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {videos.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => handleNavigate(item)}
            onMouseEnter={() => handleEnter(index)}
            onMouseLeave={() => handleLeave(index)}
            className="flex cursor-pointer flex-col gap-2 duration-300 ease-in-out hover:transition"
          >
            <video
              ref={(video) => (videoRefs.current[index] = video)}
              poster={item.thumbnailUrl}
              src={item.videoUrl}
              loop
              muted
              className="aspect-video h-full w-full overflow-hidden object-cover duration-300 hover:rounded-none hover:transition md:rounded-lg"
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
