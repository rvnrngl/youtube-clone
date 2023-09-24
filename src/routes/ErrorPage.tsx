import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage: React.FC = () => {
  const error: any = useRouteError();
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <h1 className="text-6xl font-semibold">Oopps!</h1>
      <p>Sorry, an unexpected error has occurred</p>
      <p className="italic text-gray-400">
        {error.statusText || error.message}
      </p>
    </div>
  );
};
