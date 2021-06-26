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
        name: 'Products',
        href: '/products',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 mr-2'
            viewBox='0 0 18 18'
            fill='currentColor'
          >
            <path d='M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z' />
          </svg>
        ),
      },
      {
        name: 'My Watersheds',
        href: '/my-watersheds',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 mr-2'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
          </svg>
        ),
      },
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
              <span className='block text-xl text-white'>
                <a href='/'>Cumulus</a>
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
