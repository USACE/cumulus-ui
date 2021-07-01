import React, { useEffect, useRef } from 'react';
import { connect } from 'redux-bundler-react';
// import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = connect(
  'selectPathname',
  ({ pathname, sidebarOpen, setSidebarOpen }) => {
    // const location = useLocation();
    // const { pathname } = location;
    //const page = pathname.split('/')[1];
    const page = pathname;
    // const NavLink = 'home';

    const trigger = useRef(null);
    const sidebar = useRef(null);

    // close on click outside
    useEffect(() => {
      const clickHandler = ({ target }) => {
        if (!sidebar.current || !trigger.current) return;
        if (
          !sidebarOpen ||
          sidebar.current.contains(target) ||
          trigger.current.contains(target)
        )
          return;
        setSidebarOpen(false);
      };
      document.addEventListener('click', clickHandler);
      return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
      const keyHandler = ({ keyCode }) => {
        if (!sidebarOpen || keyCode !== 27) return;
        setSidebarOpen(false);
      };
      document.addEventListener('keydown', keyHandler);
      return () => document.removeEventListener('keydown', keyHandler);
    });

    const SideBarItem = ({ name, href, icon }) => {
      return (
        <li
          className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
            page === href && 'bg-gray-900'
          }`}
        >
          <a
            href={href}
            className={`block text-gray-200 hover:text-white transition duration-150 cursor-pointer ${
              page !== href && 'hover:text-gray-200'
            }`}
          >
            <div className='flex flex-grow'>
              {icon}
              <span className='text-sm font-medium'>
                {name || 'not defined'}
              </span>
            </div>
          </a>
        </li>
      );
    };

    const sideBarItems = [
      {
        name: 'Home',
        href: '/',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 mr-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
            />
          </svg>
        ),
      },
      {
        name: 'Products',
        href: '/products',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 mr-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
            />
          </svg>
        ),
      },
      // {
      //   name: 'My Watersheds',
      //   href: '/my-watersheds',
      //   icon: (
      //     <svg
      //       xmlns='http://www.w3.org/2000/svg'
      //       className='h-6 w-6 mr-2'
      //       viewBox='0 0 20 20'
      //       fill='currentColor'
      //     >
      //       <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
      //     </svg>
      //   ),
      // },
      {
        name: 'My Downloads',
        href: '/downloads',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 mr-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
            />
          </svg>
        ),
      },
    ];

    return (
      <div className='lg:w-64'>
        {/* Sidebar backdrop (mobile only) */}
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
            sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden='true'
        ></div>

        {/* Sidebar */}
        <div
          id='sidebar'
          ref={sidebar}
          className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-64'
          }`}
        >
          {/* Sidebar header */}
          <div className='flex justify-between mb-10 pr-3 sm:px-2'>
            {/* Close button */}
            <button
              ref={trigger}
              className='lg:hidden text-gray-500 hover:text-gray-400'
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-controls='sidebar'
              aria-expanded={sidebarOpen}
            >
              <span className='sr-only'>Close sidebar</span>
              <svg
                className='w-6 h-6 fill-current'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z' />
              </svg>
            </button>
            {/* Logo */}

            <div className='block'>
              <span className='block text-3xl text-white'>
                <a href='/'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-cloud-drizzle inline mr-2'
                  >
                    <line x1='8' y1='19' x2='8' y2='21'></line>
                    <line x1='8' y1='13' x2='8' y2='15'></line>
                    <line x1='16' y1='19' x2='16' y2='21'></line>
                    <line x1='16' y1='13' x2='16' y2='15'></line>
                    <line x1='12' y1='21' x2='12' y2='23'></line>
                    <line x1='12' y1='15' x2='12' y2='17'></line>
                    <path d='M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25'></path>
                  </svg>
                  Cumulus
                </a>
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className='text-xs uppercase text-gray-500 font-semibold pl-3'>
              Pages
            </h3>
            <ul className='mt-3'>
              {/* SideBarItems */}
              {sideBarItems.map((item, idx) => (
                <SideBarItem key={idx} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
);

export default Sidebar;
