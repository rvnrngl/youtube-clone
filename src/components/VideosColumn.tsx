import { VideoProps } from "./VideoSection";
import { BiDotsVerticalRounded } from "react-icons/bi";

type VideoColumnProps = {
  videos: VideoProps[];
};

export const VideosColumn = (props: VideoColumnProps) => {
  const { videos } = props;
  return (
    <div className="flex w-full flex-col gap-2">
      {videos.map((video: VideoProps, index: number) => {
        return (
          <div
            key={index}
            className="group flex w-full cursor-pointer flex-row items-start justify-between gap-2"
          >
            <div className="flex w-full flex-row gap-2">
              <img
                src={video.thumbnailUrl}
                alt={video.id}
                className="aspect-video w-2/4 max-w-[200px] rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-base font-bold leading-5">
                  {video.title}
                </span>
                <p className="line-clamp-2 text-xs">{video.author}</p>
                <span className="text-xs text-gray-500">{video.views}</span>
                <span className="text-xs text-gray-500">
                  {video.uploadTime}
                </span>
              </div>
            </div>
            <div className="invisible flex items-center justify-center group-hover:visible">
              <BiDotsVerticalRounded size={20} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
