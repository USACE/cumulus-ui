import React from 'react';
import Navbar from '../../app-components/navbar';
import SubNavbar from '../../app-components/sub-navbar';
import { connect } from 'redux-bundler-react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import ReactTooltip from 'react-tooltip';
import moment from 'moment';
import PageHeading from '../../app-components/page-heading';
import { formatDistance, formatDistanceToNow, parseISO } from 'date-fns';

import Map from '../../app-components/class-map';

import Loader from '../../app-components/loader';

const colorClassBinary = (value) => {
  if (!value || !value.count) {
    return 'fill-current text-gray-300';
  } else {
    return 'fill-current text-green-400';
  }
};

const colorClassHourly = (value) => {
  const color = ({ count }) =>
    count === 24
      ? 'text-green-500'
      : count < 24 && count > 10
      ? 'text-green-300'
      : count <= 10 && count > 0
      ? 'text-green-100'
      : 'text-gray-200';

  return `fill-current ${value ? color(value) : 'text-gray-200'}`;
};

const AvailabilityCalendar = ({ year, dates, classForValue }) => {
  return (
    <div className="p-2 m-4 border-0 border-black">
      <div className="mx-2">
        <h1 className="text-md mb-2">{`WY${year}`}</h1>
      </div>
      <div className="">
        <CalendarHeatmap
          startDate={new Date(`${year - 1}-10-01`)}
          endDate={new Date(`${year}-09-30`)}
          values={dates}
          classForValue={classForValue}
          tooltipDataAttrs={(value) =>
            value &&
            value.date && {
              'data-tip': `${moment.utc(value.date).format('YYYY-MM-DD')}: ${
                value.count
              } Grids`,
            }
          }
        />
        <ReactTooltip />
      </div>
    </div>
  );
};

export default connect(
  'selectProductByRoute',
  'selectProductYearsByRoute',
  'selectProductavailabilityByRoute',
  'selectProductavailabilityIsLoading',
  ({
    productByRoute: product,
    productYearsByRoute: productYears,
    productavailabilityByRoute: productAvailability,
    productavailabilityIsLoading: isLoading,
  }) => {
    // Color Ramp Depends on Hourly vs. Daily temporal_resolution
    const classForValue = (resolution) => {
      return parseInt(resolution) === 3600
        ? colorClassHourly
        : colorClassBinary;
    };
    return (
      product && (
        <main className="bg-gray-100 border-0 border-black h-screen">
          <Navbar />
          <SubNavbar />
          <div className="mx-auto max-w-screen-2xl sm:p-10">
            <PageHeading heading={product.name} subHeading="" />
            {/* <div className="container mx-auto border-red-700 border-2 h-screen"> */}
            {/* <h1 className="mt-0 text-3xl font-sans">{product.name}</h1> */}

            {/* <!--main grid container--> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-0">
              <div className="col-span-2 m-0 mb-2 p-3 bg-white min-h-0 shadow-md rounded">
                <span className="font-bold text-gray-600 text-md text-secondary uppercase tracking-wider block border-b-2 border-gray-100">
                  Product Description
                </span>
                <p className="p-2">{product.description}</p>
                <button
                  disabled
                  className="bg-gray-400 hover:bg-blue-700 text-white font-bold ml-2 mt-2 py-2 px-2 rounded"
                >
                  <a href="https://google.com">Product Website</a>
                </button>
              </div>

              {/* MAP */}
              {/* <div className="col-span-1 m-0 p-3 bg-white min-h-0 shadow-md rounded h-4/5">
                <Map
                  mapKey={'productDetailMap'}
                  height={300}
                  options={{
                    center: [-98.0, 37.0],
                    zoom: 2,
                  }}
                />
              </div> */}
              <div className="col-span-1 row-span-2 m-0 mb-3 p-3 bg-white min-h-0 shadow-md rounded">
                <span className="font-bold text-gray-600 text-md text-secondary uppercase tracking-wider block border-b-2 border-gray-100">
                  Product Metadata
                </span>
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden border-b border-gray-200">
                        <table className="min-w-full divide-y divide-gray-200 mt-3">
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="bg-gray-100 border-b-2 border-gray-200 p-2 w-1/3">
                                Parameter
                              </td>
                              <td className="p-1">{product.parameter}</td>
                            </tr>
                            <tr>
                              <td className="bg-gray-100 border-b-2 border-gray-200 p-2 w-1/3">
                                Unit
                              </td>
                              <td className="p-1">{product.unit}</td>
                            </tr>
                            <tr>
                              <td className="bg-gray-100 border-b-2 border-gray-200 p-2 w-1/3">
                                Earliest Product:
                              </td>
                              <td className="p-1">
                                {product.after}
                                <div className="text-sm text-gray-900">
                                  {product.after &&
                                    formatDistanceToNow(
                                      parseISO(product.after)
                                    ) + ' ago'}
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-gray-100 border-b-2 border-gray-200 p-2 w-1/3">
                                Latest Product:
                              </td>
                              <td className="p-1">
                                {product.before}
                                <div className="text-sm text-gray-900">
                                  {product.before &&
                                    formatDistanceToNow(
                                      parseISO(product.before)
                                    ) + ' ago'}
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-gray-100 border-b-2 border-gray-200 p-2 w-1/3">
                                Availability:
                              </td>
                              <td className="p-1">
                                {Math.round(product.percent_coverage)}%
                                {' over '}
                                {product.after &&
                                  product.before &&
                                  formatDistance(
                                    parseISO(product.after),
                                    parseISO(product.before)
                                  )}
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-gray-100 border-b-2 border-gray-200 p-2 w-1/3">
                                Total Files:
                              </td>
                              <td className="p-1">
                                {product.productfile_count}
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-gray-100 border-gray-200 p-2 w-1/3">
                                DSS Version:
                              </td>
                              <td className="p-1">{product.dss_fpart}</td>
                            </tr>
                            <tr>
                              <td className="bg-gray-100 border-gray-200 p-2 w-1/3">
                                Tags:
                              </td>
                              <td className="p-1">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  {product.is_realtime && 'Realtime'}
                                </span>
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                  {product.is_forecast && 'Forecast'}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 opacity-70 m-0 px-1 py-10 min-h-0">
                  <Map
                    mapKey={'productDetailMap'}
                    height={300}
                    options={{
                      center: [-98.0, 37.0],
                      zoom: 3,
                    }}
                  />
                </div>
              </div>

              <div className="col-span-2 m-0 p-3 bg-white min-h-0 shadow-md rounded">
                <span className="font-bold text-gray-600 text-md text-secondary uppercase tracking-wider mr-4">
                  Availability Details
                </span>
                <hr />
                <div className="border-0 border-blue-500 overflow-y-scroll overscroll-contain h-96">
                  {isLoading || !productAvailability ? (
                    <Loader opt={'dissolve-cube'} color={'#9ae6b4'} />
                  ) : (
                    productYears
                      .reverse()
                      .map((year, idx) => (
                        <AvailabilityCalendar
                          key={idx}
                          year={year}
                          dates={productAvailability.date_counts}
                          classForValue={classForValue(
                            product.temporal_resolution
                          )}
                        />
                      ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      )
    );
  }
);
