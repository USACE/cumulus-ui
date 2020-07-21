import React from "react";
import Navbar from "../../app-components/navbar";
import { connect } from "redux-bundler-react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";

const colorClass = (value) => {
  if (!value || !value.count) {
    return "fill-current text-gray-300";
  } else {
    return "fill-current text-green-400";
  }
};




const AvailabilityCalendar = ({year, dates}) => {
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
          classForValue={colorClass}
          tooltipDataAttrs={(value) =>
            value && { "data-tip": `${value.date}: ${value.count}/${1} Grids` }
          }
        />
        <ReactTooltip />
      </div>
    </div>
  );
}


export default connect(
  "selectProductByRoute",
  "selectProductYearsByRoute",
  "selectProductavailabilityByRoute",
  ({ productByRoute: product, productYearsByRoute: productYears, productavailabilityByRoute: productAvailability }) => {

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
                  { (productAvailability && productAvailability.date_counts) &&
                  productYears.map((year, idx) => <AvailabilityCalendar key={idx} year={year} dates={productAvailability.date_counts} />)}
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
