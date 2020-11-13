import React from "react";
import Navbar from "../../app-components/navbar";
import { connect } from "redux-bundler-react";

import MyTokens from "./my-tokens";

//temp style to see div borders
//const style = `div{border:1px solid red;}`;

export default connect(
  "selectProfileMyProfile",
  "selectAuthUsername",
  (props) => {
    const profile = props.profileMyProfile;
    const user = props.authUsername;

    function formatAuthUsername(username) {
      const parts = username.split(".");
      if (parts.length === 2) {
        return parts[0] + ", " + parts[1];
      } else {
        return parts[0] + ", " + parts[1] + " " + parts[2];
      }
    }

    return (
      <main>
        {/* {JSON.stringify(profile)} */}
        <Navbar />
        <div className="container mx-auto">
          {/* <style>{style}</style> */}

          <h2 className="mt-10 text-5xl">{formatAuthUsername(user)}</h2>

          <h2 className="mt-10 text-3xl text-gray-600">My Profile</h2>
          <div className="mb-10 grid grid-flow-col grid-cols-6 grid-rows-3 gap-4 rounded-lg border hover:border-blue-400 bg-gray-100 p-4 shadow-lg">
            <div className="font-semibold">Name:</div>
            <div className="col-start-2 col-end-7">
              {formatAuthUsername(user)}
            </div>
            <div className="font-semibold">Email:</div>
            <div className="col-start-2 col-end-7">{profile.email}</div>
            {/* <div className="font-semibold">Default Office:</div>
            <div className="col-start-2 col-end-7">
              CELRH - Huntington District
            </div> */}
          </div>

          <MyTokens />
        </div>
      </main>
    );
  }
);
