import React from "react";

export const Spinner = () => {
  return (
    <div className="flex w-full items-center justify-center text-white">
      <div className="w-10 h-10 border-2 border-solid border-red-500 rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};
