import React from "react";
import { VideoSection } from "../components/VideoSection";
import { Keywords } from "../components/Keywords";

export const Home: React.FC = () => {
  return (
    <main className="ml-0 mt-[75px] flex w-full flex-col gap-4 overflow-hidden overflow-y-auto px-6 pr-6 md:ml-[100px] md:w-[calc(100vw-125px)] md:px-0">
      <Keywords />
      <VideoSection />
    </main>
  );
};
