import React, { useEffect, useRef } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  // const location = useLocation();
  // const { pathname } = location;
  // const page = pathname.split('/')[1];
  const page = 'home';
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
          page === '' && 'bg-gray-900'
        }`}
      >
        <a
          href={href}
          className={`block text-gray-200 hover:text-white transition duration-150 cursor-pointer ${
            page === '' && 'hover:text-gray-200'
          }`}
        >
          <div className='flex flex-grow'>
            {icon}
            <span className='text-sm font-medium'>{name || 'not defined'}</span>
          </div>
        </a>
      </li>
    );
  };

  const sideBarItems = [
    {
      name: 'Products',
      href: '/admin/products',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
        </svg>
      ),
    },
    {
      name: 'Watersheds',
      href: '/admin/watersheds',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
        </svg>
      ),
    },
    {
      name: 'Accounts',
      href: '/admin/accounts',
      icon: (
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
            strokeWidth={2}
            d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
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
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-blue-800 p-4 transition-transform duration-200 ease-in-out ${
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
          <span className='block text-sm text-gray-400 cursor-pointer'>
            <a href='/'>Back to Public</a>
          </span>
          Cumulus Admin
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

export default Sidebar;