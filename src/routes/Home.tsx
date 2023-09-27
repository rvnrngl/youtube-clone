import React from "react";
import { VideoSection } from "../components/VideoSection";
import { Keywords } from "../components/Keywords";

export const Home: React.FC = () => {
  return (
    <main className="ml-0 mt-[64px] flex w-full flex-col gap-4 overflow-hidden overflow-y-auto bg-white px-6 pr-6 md:ml-[100px] md:w-[calc(100vw-125px)] md:px-0">
      <div className="fixed w-full bg-white pb-4">
        <Keywords />
      </div>
      <div className="w-full pt-12 lg:pt-16">
        <VideoSection />
        <VideoSection />
      </div>
    </main>
  );
};
