import React from 'react';
import Navbar from '../../app-components/navbar';

export default function Admin({ children }) {
  return (
    <>
      <Navbar />
      <main className="bg-green-700 h-full">
        <div className="flex mb-4">
          <div className="w-1/6 bg-gray-700 pt-10">
            <div>
              <a
                href="/admin"
                className="w-full bg-gray-100 block p-3 m-0 text-gray-700 border-b-2 border-gray-500 font-semibold"
              >
                Home
              </a>
            </div>
            <div>
              <a
                href="/admin"
                className="w-full bg-gray-600 block p-3 m-0 text-white border-b-2 border-gray-500"
              >
                Products
              </a>
            </div>
            <div>
              <a
                href="/admin"
                className="w-full bg-gray-600 block p-3 m-0 text-white border-b-2 border-gray-500"
              >
                Watersheds
              </a>
            </div>
          </div>
          <div className="w-5/6 bg-gray-100 p-3">
            <div className="mt-4 p-4 flex">
              <a
                className="border-b-2 border-gray-200 hover:border-green-400"
                href="/admin/shapeloader"
              >
                Shape Loader
              </a>
            </div>
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
