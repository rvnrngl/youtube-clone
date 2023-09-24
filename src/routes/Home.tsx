import React from "react";
import { VideoSection } from "../components/VideoSection";

export const Home: React.FC = () => {
  return (
    <main className="ml-0 mt-[110px] w-full overflow-hidden overflow-y-auto px-4 pr-6 md:ml-[100px] md:w-[calc(100vw-125px)] md:px-0">
      <VideoSection />
    </main>
  );
};
