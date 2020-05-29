import React from "react";
import Navbar from "../../app-components/navbar";

export default ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-4 p-4 flex">
          <a
            className="border-b-2 border-gray-200 hover:border-green-400"
            href="/admin/shapeloader"
          >
            Shape Loader
          </a>
        </div>
      </div>
      {children}
    </>
  );
};
