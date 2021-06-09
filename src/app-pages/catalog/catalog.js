import React from 'react';
import Navbar from '../../app-components/navbar';
import SubNavbar from '../../app-components/sub-navbar';
import { connect } from 'redux-bundler-react';
// import moment from 'moment';
import { formatDistance, formatDistanceToNow, parseISO } from 'date-fns';

function ProductImage(group) {
  switch (group) {
    case 'PRECIP':
      return 'https://cdn.pixabay.com/photo/2016/03/18/15/09/light-rain-1265212_960_720.png';
    case 'AIRTEMP':
      return 'https://cdn.pixabay.com/photo/2016/03/31/15/27/cold-1293305_960_720.png';
    case 'SNOW':
      return 'https://cdn.pixabay.com/photo/2016/10/20/10/16/snow-flake-1755115_960_720.png';
    default:
      return 'https://cdn.pixabay.com/photo/2016/03/18/15/09/light-rain-1265212_960_720.png';
  }
}

const ProductRow = (p) => (
  <tr className="hover:bg-gray-100">
    <td className="px-6 py-4 whitespace-nowrap">
      <a href={`/catalog/${p.id}`}>
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            {/* <i className="mdi mdi-weather-pouring text-blue-800" /> */}
            <img
              className="h-10 w-10 object-contain"
              src={ProductImage(p.parameter)}
              alt={p.parameter}
              title={p.parameter}
            />
          </div>
          <div className="ml-4">
            <div className="text-md font-semibold text-gray-900">{p.name}</div>
            <div className="text-sm text-gray-500">
              {p.parameter} measured in {p.unit}
            </div>
          </div>
        </div>
      </a>
    </td>

    <td className="px-6 py-4 whitespace-nowrap">
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        {p.is_realtime && 'Realtime'}
      </span>
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
        {p.is_forecast && 'Forecast'}
      </span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-900">
        {p.after && formatDistanceToNow(parseISO(p.after)) + ' ago'}
      </div>
      <div className="text-sm text-gray-500">{p.after}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-900">
        {p.before && formatDistanceToNow(parseISO(p.before)) + ' ago'}
      </div>
      <div className="text-sm text-gray-500">{p.before}</div>
    </td>

    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {/* <div className="text-sm text-gray-500">
        Coverage: {Math.round(p.percent_coverage, 1)}%
      </div> */}
      <div className="text-sm text-gray-500">
        Grid Count: {p.productfile_count}
      </div>
      <div className="text-sm text-gray-500">
        Duration:{' '}
        {p.after &&
          p.before &&
          formatDistance(parseISO(p.after), parseISO(p.before))}
      </div>
    </td>
  </tr>
);

const ProductTableHeader = () => (
  <thead className="bg-gray-100">
    <tr>
      {['Product Name', 'Type', 'First Record', 'Last Record', 'Stats'].map(
        (c) => {
          return (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {c}
            </th>
          );
        }
      )}
    </tr>
  </thead>
);

export default connect(
  'selectProductItemsArray',
  ({ productItemsArray: products }) => {
    return (
      <main className="bg-gray-100">
        <Navbar />
        <SubNavbar />
        <div className="flex flex-col">
          <div className="container-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <ProductTableHeader />

                  <tbody className="bg-white divide-y divide-gray-300">
                    {products.map((p) => ProductRow(p))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
);
