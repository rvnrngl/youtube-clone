import React from "react";
import { Short } from "../components/Short";

export const ShortsPage: React.FC = () => {
  return (
    <main className="ml-0 mt-[80px] w-full overflow-hidden overflow-y-auto px-6 pr-6 md:ml-[100px] md:w-[calc(100vw-125px)] md:px-0">
      <div className="flex h-full w-full snap-y snap-mandatory flex-col items-center justify-center gap-7 overflow-scroll">
        <Short />
        <Short />
        <Short />
        <Short />
        <Short />
      </div>
    </main>
  );
};
