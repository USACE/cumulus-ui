import React from "react";
import Navbar from "../../app-components/navbar";
import { connect } from "redux-bundler-react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";
import moment from "moment";

const colorClassBinary = (value) => {
  if (!value || !value.count) {
    return "fill-current text-gray-300";
  } else {
    return "fill-current text-green-400";
  }
};

const colorClassHourly = (value) => {
  const color = ({ count }) =>
    count === 24
      ? "text-green"
      : count < 24 && count > 20
      ? "text-green-lighter"
      : count < 20 && count > 0
      ? "text-yellow-light"
      : "text-gray-300";

  return `fill-current ${value ? color(value) : "text-gray-300"}`;
};

const AvailabilityCalendar = ({ year, dates, classForValue }) => {
  return (
    <div className="flex flex-row justify-between items-center p-2 m-4">
      <div className="w-1/12">
        <h1 className="text-md mb-2">{`WY${year}`}</h1>
      </div>
      <div className="w-11/12">
        <CalendarHeatmap
          startDate={new Date(`${year - 1}-10-01`)}
          endDate={new Date(`${year}-09-30`)}
          values={dates}
          classForValue={classForValue}
          tooltipDataAttrs={(value) =>
            value &&
            value.date && {
              "data-tip": `${moment(value.date).format("YYYY-MM-DD")}: ${
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
  "selectProductByRoute",
  "selectProductYearsByRoute",
  "selectProductavailabilityByRoute",
  ({
    productByRoute: product,
    productYearsByRoute: productYears,
    productavailabilityByRoute: productAvailability,
  }) => {
    // Color Ramp Depends on Hourly vs. Daily temporal_resolution
    const classForValue = (resolution) =>
      resolution === 3600 ? colorClassHourly : colorClassBinary;

    return (
      product && (
        <main>
          <Navbar />
          <div className="container mx-auto">
            <h1 className="mt-12 text-3xl font-sans">{product.name}</h1>
            <hr className="mt-4" />
            <div className="flex flex-row">
              <div className="w-3/4">
                <div className="border border-2 m-2 p-2">
                  <h1 className="font-sans text-lg">Availability Details</h1>
                  <hr />
                  {productAvailability &&
                    productYears.map((year, idx) => (
                      <AvailabilityCalendar
                        key={idx}
                        year={year}
                        dates={productAvailability.date_counts}
                        classForValue={classForValue(
                          product.temporal_resolution
                        )}
                      />
                    ))}
                </div>
              </div>
              <div className="w-1/4">
                <div className="border border-2 m-2 p-2">
                  <h1 className="text-lg font-sans">Metadata</h1>
                  <hr />
                  <ul>
                    {Object.keys(product).map((k, idx) => (
                      <li key={idx}>{`${k}: ${product[k]}`}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      )
    );
  }
);
