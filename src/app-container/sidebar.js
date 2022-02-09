import { connect } from 'redux-bundler-react';
import { Fragment } from 'react';

import {
  CollectionIcon,
  DownloadIcon,
  HomeIcon,
  XIcon,
  SupportIcon,
} from '@heroicons/react/outline';
import { classNames } from '../utils';
import { Dialog, Transition } from '@headlessui/react';

const sidebarNavigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: false },
  { name: 'Products', href: '/products', icon: CollectionIcon, current: false },
  {
    name: 'Download',
    href: '#modal=download',
    icon: DownloadIcon,
    current: false,
  },
  {
    name: 'Support',
    href: '/support',
    icon: SupportIcon,
    current: false,
  },
];

const SidebarItem = ({ name, href, current }) => {
  return (
    <a
      key={name}
      href={href}
      className={classNames(
        current
          ? 'bg-indigo-800 text-white'
          : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
        'group py-2 px-3 rounded-md flex items-center text-sm font-medium'
      )}
      aria-current={current ? 'page' : undefined}
    >
      <icon
        className={classNames(
          current ? 'text-white' : 'text-indigo-300 group-hover:text-white',
          'mr-3 h-6 w-6'
        )}
        aria-hidden='true'
      />
      <span>{name}</span>
    </a>
  );
};

export default connect(({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <>
      {/* Desktop menu */}
      <div className='hidden w-28 bg-indigo-700 overflow-y-auto md:block'>
        <div className='w-full py-6 flex flex-col items-center'>
          <div className='flex-shrink-0 flex items-center flex-col'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='36'
              height='36'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-blue-50'
            >
              <line x1='8' y1='19' x2='8' y2='21'></line>
              <line x1='8' y1='13' x2='8' y2='15'></line>
              <line x1='16' y1='19' x2='16' y2='21'></line>
              <line x1='16' y1='13' x2='16' y2='15'></line>
              <line x1='12' y1='21' x2='12' y2='23'></line>
              <line x1='12' y1='15' x2='12' y2='17'></line>
              <path d='M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25'></path>
            </svg>
            <div className='text-blue-50 font-extralight'>Cumulus</div>
          </div>
          <div className='flex-1 mt-6 w-full px-2 space-y-1'>
            {sidebarNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-indigo-800 text-white'
                    : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
                  'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? 'text-white'
                      : 'text-indigo-300 group-hover:text-white',
                    'h-6 w-6'
                  )}
                  aria-hidden='true'
                />
                <span className='mt-2'>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as='div' className='md:hidden' onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-1 right-0 -mr-14 p-1'>
                    <button
                      type='button'
                      className='h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <XIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                      <span className='sr-only'>Close sidebar</span>
                    </button>
                  </div>
                </Transition.Child>
                <div className='flex-shrink-0 px-4 flex items-center'>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark.svg?color=white'
                    alt='Workflow'
                  />
                </div>
                <div className='mt-5 flex-1 h-0 px-2 overflow-y-auto'>
                  <nav className='h-full flex flex-col'>
                    <div className='space-y-1'>
                      {sidebarNavigation.map((item) => (
                        <SidebarItem key={item.name} {...item} />
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className='flex-shrink-0 w-14' aria-hidden='true'>
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
});
