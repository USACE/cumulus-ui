import React from 'react';
import { connect } from 'redux-bundler-react';

const TimeWindow = null;

export default connect('selectPathname', ({ pathname }) => {
  //   const siteHomeUrl = authIsLoggedIn ? '/dashboard' : '/';

  return (
    <div className="md:flex max-w-full py-2 px-4 sm:px-6 lg:px-8 bg-white border-b-2">
      <div className="md:flex-shrink-0 text-lg font-bold text-gray-500 mt-2">
        {' '}
        <a href={'/' + pathname.split('/')[1]}>{pathname.split('/')[1]}</a>
        {' >> '}
        {'product name placeholder'}
      </div>
      <div className="md:flex-grow"></div>
      <div className="md:flex-shrink-0">
        <span className="font-semibold text-gray-600 mr-3">Time Window</span>
        <label className="block mt-5 sm:inline" forhtml="startDate">
          <span className="text-gray-700">Start</span>
        </label>

        <input
          disabled
          id="startDate"
          name="startDate"
          type="date"
          className="border-0 border-b-2 border-gray-200 text-gray-500 focus:ring-0 focus:border-black"
        />
        <label className="block mt-5 sm:inline" forhtml="startDate">
          <span className="text-gray-700">End</span>
        </label>
        <input
          disabled
          id="endDate"
          name="endDate"
          type="date"
          className="border-0 border-b-2 border-gray-200 text-gray-500 focus:ring-0 focus:border-black"
        />
      </div>
    </div>
  );
});

export { TimeWindow };
