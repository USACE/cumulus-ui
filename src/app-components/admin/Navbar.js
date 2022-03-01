import React from 'react';
import { connect } from 'redux-bundler-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const AdminNavbar = connect('selectUrlObject', ({ urlObject: urlObj }) => {
  const navigation = [
    {
      name: 'Admin Home',
      href: '/admin',
    },
    {
      name: 'Downloads',
      href: '/admin/downloads',
    },
    { name: 'Products', href: '/admin/products' },
  ];

  return (
    <div className='w-full px-5 border-b-2'>
      <nav className='lg:py-2 lg:flex lg:space-x-8'>
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.href === urlObj.pathname
                ? 'bg-gray-300 text-gray-900'
                : 'text-gray-900 hover:bg-gray-300 hover:text-gray-900',
              'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
});

export default AdminNavbar;
