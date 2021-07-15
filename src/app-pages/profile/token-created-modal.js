import React, { useState } from 'react';
import { connect } from 'redux-bundler-react';

// Markup for modal sourced from free
// Tailwind UI Preview Components
// https://tailwindui.com/preview

export default connect('doModalClose', ({ doModalClose, secretTokenInfo }) => {
  const [secretTokenIsHidden, setSecretTokenIsHidden] = useState(true);

  return (
    <div
      className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full'
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-headline'
    >
      <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
        <div className='sm:flex sm:items-start'>
          <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
            {/* <!-- Heroicon name: exclamation --> */}
            <svg
              className='h-6 w-6 text-red-600'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
              />
            </svg>
          </div>
          <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
            <h3
              className='text-lg leading-6 font-medium text-gray-900'
              id='modal-headline'
            >
              Token Generated
            </h3>
            <div className='mt-3 mb-8'>
              <p className='text-sm leading-5 text-gray-800 bg-yellow-200 p-2 border-l-4 border-yellow-400'>
                You will not see this token again after closing this box. This
                token gives anyone who has it the same system permissions you
                have sitting at your keyboard. Please protect it accordingly.
              </p>
            </div>
            {/* Token ID */}
            <div className='my-6'>
              <h5 className='mb-3'>token id</h5>
              <div className='flex flex-row justify-between'>
                <span className='font-mono'>{secretTokenInfo.token_id}</span>
                <span>
                  <i
                    className='mdi mdi-content-copy mdi-18px cursor-pointer bg-green-500'
                    onClick={(e) => {
                      navigator.clipboard.writeText(secretTokenInfo.token_id);
                    }}
                  />
                </span>
              </div>
            </div>
            {/* Secret Token Info */}
            <div className='my-6'>
              <div className='mb-3'>
                <h5>
                  secret token
                  <i
                    className={`ml-4 cursor-pointer mdi mdi-24px ${
                      secretTokenIsHidden ? 'mdi-eye' : 'mdi-eye-off'
                    }`}
                    onClick={(e) => {
                      setSecretTokenIsHidden(!secretTokenIsHidden);
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 inline'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <title>show or hide secret token</title>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                      />
                    </svg>
                  </i>
                </h5>
              </div>

              <div className='flex flex-row justify-between'>
                <span className='font-mono'>
                  {secretTokenIsHidden
                    ? '*'.repeat(secretTokenInfo.secret_token.length)
                    : secretTokenInfo.secret_token}
                </span>

                <span>
                  <i
                    className='mdi mdi-content-copy mdi-18px cursor-pointer'
                    onClick={(e) => {
                      navigator.clipboard.writeText(
                        secretTokenInfo.secret_token
                      );
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 inline'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <title>copy to clipboard</title>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
                      />
                    </svg>
                  </i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
        <span className='flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto'>
          <button
            type='button'
            className='inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5'
            onClick={doModalClose}
          >
            Close
          </button>
        </span>
      </div>
    </div>
  );
});
