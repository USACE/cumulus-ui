import { BookOpenIcon, DesktopComputerIcon } from '@heroicons/react/outline';

import Faqs from './faqs';

const GitHubIcon = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      className={props.className}
      stroke='currentColor'
      fill='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368c-56.832-6.496-116.608-28.544-116.608-127.008
c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68c0,0,21.504-6.912,70.4,26.336
c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672c48.864-33.248,70.336-26.336,70.336-26.336
c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992c0,98.72-59.84,120.448-116.864,126.816
c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496c0,6.88,4.608,14.88,17.6,12.352
C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z'
      />
    </svg>
  );
};

const items = [
  {
    name: 'API Documentation',
    href: 'https://petstore.swagger.io/?url=https://raw.githubusercontent.com/USACE/cumulus-api/stable/docs/apidoc.yaml',
    target: '_blank',
    icon: BookOpenIcon,
    description:
      'Interacting with Cumulus using external applications/scripts.',
  },
  {
    name: 'CWMS CAVI/HEC RTS Script Setup',
    href: 'https://github.com/USACE/rts-utils/wiki',
    target: '_blank',
    icon: DesktopComputerIcon,
    description: 'Download grids within the CWMS CAVI or HEC RTS',
  },
  {
    name: 'Contact the Dev Team',
    href: 'https://github.com/USACE/cumulus/issues',
    target: '_blank',
    icon: GitHubIcon,
    description:
      'Report an issue/bug, ask a question or provide feedback. (external link to Github.com)',
  },
];

export default function Support() {
  return (
    <div className='pb-10 bg-gray-100'>
      <div className='max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8'>
        <div className='bg-white rounded-2xl px-6 py-16 sm:p-16 shadow-md mb-10'>
          <div className='max-w-xl mx-auto lg:max-w-none'>
            <div className='text-center'>
              <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                How can we help?
              </h2>
            </div>
            <div className='mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3'>
              {items.map((item) => (
                <a key={item.name} href={item.href} target={item.target}>
                  <div
                    key={item.name}
                    className='text-center sm:flex sm:text-left lg:block lg:text-center'
                  >
                    <div className='sm:flex-shrink-0'>
                      <div className='flow-root'>
                        <item.icon className='w-16 h-16 mx-auto text-gray-500' />
                      </div>
                    </div>
                    <div className='mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0'>
                      <h3 className='text-sm font-medium lg:text-lg text-gray-900'>
                        {item.name}
                      </h3>
                      <p className='mt-2 text-sm text-gray-500'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <Faqs />
      </div>
    </div>
  );
}
