import React from "react";
import Navbar from "../../app-components/navbar";

//temp style to see div borders
const style = `div{border:1px solid red;}`;

export default () => (
  <main>
    <Navbar />
    <div className="container mx-auto">

      {/* <style>{style}</style> */}

      <h2 className="mt-10 text-5xl">John Doe</h2>

      <h2 className="mt-10 text-3xl text-gray-600">My Profile</h2>
      <div className="grid grid-flow-col grid-cols-6 grid-rows-3 gap-4 rounded-lg border hover:border-blue-400 bg-gray-100 p-4 shadow-lg">
        <div className="font-semibold">
          Name:
        </div>
        <div className="col-start-2 col-end-7">
          John Doe
        </div>
        <div className="font-semibold">
          Email:
        </div>
        <div className="col-start-2 col-end-7">
          user@domain.com
        </div>
        <div className="font-semibold">
          Default Office:
        </div>
        <div className="col-start-2 col-end-7">
          CELRH - Huntington District
        </div>  

      </div>

      <h2 className="mt-10 text-3xl text-gray-600">My Tokens</h2>
      <div className="grid grid-flow-col grid-cols-6 grid-rows-3 gap-4 rounded-lg border hover:border-blue-400 bg-gray-100 p-4 shadow-lg">
        <div className="font-semibold">
          Token #1:
        </div>
        <div className="col-start-2 col-end-7 truncate">
        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
        </div>
        <div className="font-semibold">
          Token #2:
        </div>
        <div className="col-start-2 col-end-7 truncate">
        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwia
        </div> 
        <div className="col-start-1 col-end-7">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
          Generate Token
          </button>
        </div>
      </div>


    </div>
  </main>
);
