import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { classNames } from '../utils';
import { connect } from 'redux-bundler-react';

const ProfileMenu = connect(
  'selectAuthIsLoggedIn',
  'selectAuthUsername',
  'selectAuthRolesObj',
  'doAuthLogin',
  'doAuthLogout',
  ({
    authIsLoggedIn: isLoggedIn,
    authUsername: username,
    authRolesObj,
    doAuthLogin,
    doAuthLogout,
  }) => {
    return !isLoggedIn ? (
      <button href='/profile' onClick={doAuthLogin}>
        <div className='flex text-gray-500 font-semibold'>
          <span className='mr-1'>Login</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
            />
          </svg>
        </div>

        <span></span>
      </button>
    ) : (
      <Menu as='div' className='relative flex-shrink-0'>
        <div>
          <Menu.Button className='bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            <span className='sr-only'>Open user menu</span>
            {/* TODO; User images for logged-in users would be a nice touch */}
            {/* <img className='h-8 w-8 rounded-full' src='' alt='' /> */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 text-indigo-700'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <div className='flex flex-col ml-1 text-left'>
              <div className='font-semibold -mb-1'>{username}</div>
              {authRolesObj['application.admin'] ? (
                <div className='text-xs text-indigo-700 font-light'>Admin</div>
              ) : (
                <div className='text-xs text-gray-500 font-light'>User</div>
              )}
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
            {/* Your Profile */}
            <Menu.Item key='profile'>
              {({ active }) => (
                <a
                  href='/profile'
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  My Profile
                </a>
              )}
            </Menu.Item>
            {/* Sign Out */}
            <Menu.Item key='logout'>
              {({ active }) => (
                <a
                  href='/'
                  onClick={() => {
                    doAuthLogout();
                    return true;
                  }}
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Logout
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  }
);

export { ProfileMenu, ProfileMenu as default };
