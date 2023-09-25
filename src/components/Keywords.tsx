import React, { useRef, useState } from "react";

const keywords = [
  "All",
  "Live",
  "Music",
  "Playlists",
  "Gaming",
  "News",
  "Albums",
  "Shows",
  "Animated Films",
  "Romanthic Comedies",
  "Thrillers",
  "Cooking Shows",
];

export const Keywords: React.FC = () => {
  const scrollableDivRef = useRef<HTMLDivElement | null>(null);
  const [startX, setStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setStartX(e.pageX);
    setScrollLeft(scrollableDivRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!startX) return;

    const deltaX = startX - e.pageX;
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollLeft = scrollLeft + deltaX;
    }
  };

  const handleMouseUp = () => {
    setStartX(null);
  };

  return (
    <div className="fixed left-0 top-16 z-10 w-full select-none overflow-hidden bg-white px-6 pb-3 md:left-[100px] md:w-[calc(100%-100px)] md:pl-0 md:pr-6">
      <div
        ref={scrollableDivRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="flex w-full cursor-default flex-nowrap gap-2 overflow-x-auto 
      overflow-y-hidden whitespace-nowrap text-xs [-ms-overflow-style:'none'] [scrollbar-width:'none'] 
      md:gap-4 md:text-base [&::-webkit-scrollbar]:hidden"
      >
        {keywords.map((keyword, index) => {
          return (
            <span
              key={index}
              className={`rounded-md p-1 px-3 ${
                keyword === "All" ? "bg-black text-white" : "bg-neutral-100"
              }`}
            >
              {keyword}
            </span>
          );
        })}
      </div>
    </div>
  );
};
