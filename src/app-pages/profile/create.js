import React, { useState } from 'react';
import Sidebar from '../../app-components/Sidebar';
import Header from '../../app-components/Header';
import { connect } from 'redux-bundler-react';

//temp style to see div borders
//const style = `div,label{border:1px solid red;}`;

export default connect('selectAuthUsername', 'doProfileSave', (props) => {
  const authUsername = props.authUsername;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [email, setEmail] = useState('');

  function validateName(str) {
    // Name must be first name space last name
    if (str.split(' ').length >= 2) {
      setNameIsValid(true);
      return;
    }
    setNameIsValid(false);
  }

  function CreateProfile(e) {
    e.preventDefault();
    props.doProfileSave({ username: authUsername, email: email });
  }

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            {/* Welcome banner */}
            {/* <WelcomeBanner /> */}

            <div className='flex flex-wrap'>
              <form id='profile-form' onSubmit=''>
                <div className='mt-10 grid grid-flow-col grid-cols-6 grid-rows-3 gap-4 rounded-lg border bg-white p-8 shadow-lg'>
                  <label className='block text-gray-700 md:text-right text-lg font-medium pt-3'>
                    Name
                  </label>

                  <div className='col-start-2 col-end-7'>
                    <input
                      type='text'
                      size='50'
                      className={`cursor-not-allowed p-3 border-0 border-b-2 border-gray-200 text-gray-500 focus:ring-0 focus:border-black ${
                        !nameIsValid ? 'border-red-500' : ''
                      }`}
                      value={authUsername}
                      disabled={true}
                      onChange={(e) => {
                        // setName(e.target.value);
                      }}
                      onBlur={(e) => validateName(e.target.value)}
                    />
                  </div>
                  <label className='block text-gray-700 md:text-right text-lg font-medium pt-3'>
                    Email
                  </label>
                  <div className='col-start-2 col-end-7'>
                    <input
                      size='50'
                      type='text'
                      className='p-3 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  <div className='col-start-1 col-end-7'>
                    <button
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
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
          </div>
        </main>
      </div>
    </div>
  );
});
