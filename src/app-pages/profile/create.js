import React, { useState } from "react";
import Navbar from "../../app-components/navbar";
import { connect } from "redux-bundler-react";

//temp style to see div borders
//const style = `div,label{border:1px solid red;}`;

export default connect("selectAuthUsername", "doProfileSave", (props) => {
  const authUsername = props.authUsername;

  // const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [email, setEmail] = useState("");

  function validateName(str) {
    // Name must be first name space last name
    if (str.split(" ").length >= 2) {
      setNameIsValid(true);
      return;
    }
    setNameIsValid(false);
  }

  function CreateProfile(e) {
    e.preventDefault();
    props.doProfileSave({ email: email });
  }

  return (
    <main>
      <Navbar />
      {/* {`Name is set to: ${name}`} */}
      {`Name is valid: ${nameIsValid}`}
      {`Email is set to: ${email}`}
      <div className="container mx-auto">
        <form id="profile-form" onSubmit="">
          {/* <style>{style}</style> */}

          <h2 className="mt-10 text-5xl">Create Profile</h2>

          <div className="mt-10 grid grid-flow-col grid-cols-6 grid-rows-3 gap-4 rounded-lg border hover:border-blue-400 bg-gray-300 p-8 shadow-lg">
            <label className="block text-gray-700 md:text-right text-lg font-bold pt-3">
              Name
            </label>

            <div className="col-start-2 col-end-7">
              <input
                type="text"
                size="50"
                className={`appearance-none border-8 block text-gray-700 border rounded py-3 px-4 leading-tight ${
                  !nameIsValid ? "border-red-500" : ""
                }`}
                value={authUsername}
                disabled={true}
                onChange={(e) => {
                  // setName(e.target.value);
                }}
                onBlur={(e) => validateName(e.target.value)}
              />
            </div>
            <label className="block text-gray-700 md:text-right text-lg font-bold pt-3">
              Email
            </label>
            <div className="col-start-2 col-end-7">
              <input
                size="50"
                type="text"
                className="appearance-none block text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-n"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            {/* <label className="block text-gray-700 md:text-right text-lg font-bold pt-3">
              Default Office
            </label>
            <div className="col-start-2 col-end-7 inline-block relative w-64">
              <select className="block appearance-none w-64 bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="CELRH">CELRH - Huntington District</option>
                <option value="CELRN">CELRN - Nashville District</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div> */}
            <div className="col-start-1 col-end-7">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={(e) => {
                  CreateProfile(e);
                }}
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
});
