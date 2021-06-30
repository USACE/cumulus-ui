import React, { useState } from 'react';

import Sidebar from '../../app-components/Sidebar';
import Header from '../../app-components/Header';
import PageHeading from '../../app-components/page-heading';
import cavi_script_downloader_copy_paste from '../../images/docs/cavi-script-downloader-copy-paste.png';
import script_downloader from '../../images/docs/script-downloader.png';
import cumulus_rts_ui from '../../images/docs/cumulus-rts-ui.png';

function RtsScript() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const Step = ({ heading, body }) => {
    return (
      <div className='flex relative pb-12'>
        <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
          <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
        </div>
        <div className='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-400 inline-flex items-center justify-center text-white relative z-10'>
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-5 h-5'
            viewBox='0 0 24 24'
          >
            <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
          </svg>
        </div>
        <div className='flex-grow pl-4'>
          <h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
            {heading}
          </h2>
          <p className='leading-relaxed'>{body}</p>
        </div>
      </div>
    );
  };

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
            <PageHeading heading='CWMS CAVI/HEC RTS Cumulus Script Setup' />

            <div className='px-5 py-10 mt-5 mx-auto flex flex-wrap bg-white'>
              <div class='flex flex-wrap w-ful'>
                <div class='lg:w-2/5 md:w-1/2 md:pr-10 md:py-6'>
                  <Step
                    heading='Step 1'
                    body={
                      <span>
                        Create a new script in the CWMS CAVI/HEC-RTS called{' '}
                        <b>script_downloader</b>
                      </span>
                    }
                  />

                  <Step
                    heading='Step 2'
                    body={
                      <span>
                        Copy the code from the{' '}
                        <a
                          className='text-indigo-500 font-medium'
                          target='_blank'
                          rel='noreferrer'
                          href='https://raw.githubusercontent.com/USACE/rts-utils/master/watershed_scripts/script_downloader.py'
                        >
                          script_downloader.py
                        </a>{' '}
                        (using Ctrl+A to select all, then Ctrl-C to copy), paste
                        into your new script created above. Save and close the
                        script editor.
                      </span>
                    }
                  />

                  <Step
                    heading='Step 3'
                    body={
                      <span>
                        Run the script_downloader script (add to script panel
                        for quick access) and select Cumulus to download and
                        install the Cumulus RTS UI script.
                        <img src={script_downloader} alt='script downloader' />
                      </span>
                    }
                  />

                  <Step
                    heading='Step 4'
                    body={
                      <span>
                        The CumulusRTSUI script should be in your script
                        directory, add to your script panel and run the Cumulus
                        RTS UI script
                        <img src={cumulus_rts_ui} alt='cumulus rts ui script' />
                      </span>
                    }
                  />
                </div>

                {/* {Large image to right} */}
                <div className='w-full lg:w-3/5 md:w-1/2'>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={cavi_script_downloader_copy_paste}
                    title='click to view larger image'
                  >
                    <img
                      className='object-cover object-center rounded-lg md:mt-0 mt-12 shadow-md'
                      src={cavi_script_downloader_copy_paste}
                      alt='rts/cavi screenshot'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='bg-gray-300 p-5 text-sm md:text-base'>
              Notes:
              <ul className='list-inside list-disc'>
                <li>
                  The Cumulus RTS UI script will auto-populate the Start/End
                  dates from your open forecast.
                </li>
                <li>One Watershed can be selected per request</li>
                <li>Multiple products can be selected per request</li>
                <li>
                  DSS files from Cumulus are DSS version 7, but the script will
                  convert to DSS-6 for compatibility.
                </li>
                <li>
                  Recommend writing the Output File Location to a common place
                  on your PC and pointing your grid extract to this file.
                </li>
                <li>
                  Should updates to the script be required for enhancements or
                  fixes, the code will be updated in a remote repository and
                  script_downloader should be used to update.
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default RtsScript;
