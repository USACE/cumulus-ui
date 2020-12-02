import React, { useState, useEffect } from "react";
import Navbar from "../../app-components/navbar";
import { connect } from "redux-bundler-react";
import Map from "../../app-components/class-map";
import Plot from "react-plotly.js";

export default connect(
  "selectProductByParameter",
  "selectProductParameters",
  ({ productByParameter: products, productParameters: tabs }) => {
    const [activeTab, setActiveTab] = useState(null);
    useEffect(() => {
      products && tabs && tabs.length && setActiveTab(tabs[0]);
    }, [products]);

    const basin = {
      id: "d4c3c6ed-4745-4683-8287-563bba8f6ca4",
      name: "Apalachicola Chattahoochee Flint Rivers",
      x_min: 970000,
      y_min: 790000,
      x_max: 1162000,
      y_max: 1386000,
      office_symbol: "SAM",
    };

    function getProductAlias(p) {
      const aliases = {
        PRECIPITATION: "Precip",
        AIRTEMPERATURE: "AirTemp",
        SNOW: "Snow",
      };
      if (Object.keys(aliases).includes(p)) {
        return aliases[p];
      }
      return p;
    }

    // const productTypes = [
    //   {
    //     name: "Precip",
    //   },
    //   {
    //     name: "Snow",
    //   },
    //   {
    //     name: "AirTemp",
    //   },
    // ];
    // function toggleTabContent(target) {
    //   // const currentVisbility = document.getElementById(target).style.display;
    //   const productPanels = document.getElementsByClassName("product");

    //   // Set all products to hidden when any tab is clicked
    //   // to clear the contents
    //   for (let i = 0; i < productPanels.length; i++) {
    //     productPanels[i].style.display = "none";
    //   }

    //   //show the product panel
    //   document.getElementById(target).style.display = "block";
    // }

    const Tabs = ({ tabs, activeTab, setActiveTab }) =>
      tabs && tabs.length
        ? tabs.map((t, idx) => (
            <>
              <button
                key={idx}
                onClick={(e) => {
                  setActiveTab(t);
                }}
                className={`cursor-pointer py-4 px-6 block mr-1 
                  focus:outline-none font-semibold rounded-t border-b-2 ${
                    activeTab === t
                      ? "border-blue-800 bg-gray-700 text-white"
                      : "text-gray-600 hover:text-blue-600 hover:border-blue-800"
                  }`}
              >
                {getProductAlias(t)}
              </button>
            </>
          ))
        : null;

    return (
      <>
        <main className="bg-gray-200 h-full lg:h-screen">
          <Navbar />
          <div className="mx-auto max-w-screen-2xl sm:p-10">
            <div className="mb-3 bg-white rounded">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium pl-3 font-bold text-gray-800 lg:inline-block sm:block lg:mr-2">
                {basin.name}
              </h2>
              <span className="text-gray-500 font-normal sm:text-3xl lg:inline-block block text-center">
                ({basin.office_symbol})
              </span>

              <div className="flex lg:flex-row-reverse sm:text-2xl text-gray-500 bg-gray-800">
                {/* <div className="flex-initial inline-flex w-1/3"></div> */}
                <div className="flex-initial sm:inline-flex block">
                  <span className="mr-3 p-1">Statistics Time Window:</span>
                  <label htmlFor="tw_start" className="p-1">
                    Start:
                  </label>
                  <input
                    type="date"
                    placeholder="mm/dd/yyyy"
                    id="tw_start"
                    className="bg-transparent"
                  ></input>
                  <label htmlFor="tw_end" className="p-1">
                    End:
                  </label>
                  <input
                    type="date"
                    placeholder="mm/dd/yyyy"
                    id="tw_end"
                    className="bg-transparent"
                  ></input>
                </div>
              </div>
            </div>

            {/* <!--first row --> */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 mb-3">
              <div className="order-1 min-w-full sm:min-w-0 m-3 p-3 bg-white min-h-0 rounded shadow-md">
                <span className="font-bold text-gray-600 text-md text-secondary uppercase tracking-wider mr-4">
                  Available Products
                </span>
                <div className="mt-3">
                  {/* <nav classNme="bg-gray-200 mt-3"> */}
                  <nav className="flex  sm:flex-row border-b-2 border-gray-400 bg-gray-200">
                    <Tabs
                      tabs={tabs}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    />
                  </nav>
                </div>

                {products &&
                  !!activeTab &&
                  products[activeTab].map((p, index) => (
                    <>
                      <div
                        key={index}
                        className="overflow-ellipsis	overflow-hidden"
                      >
                        <ul>
                          <li className="p-2 border-b-2">{p.name}</li>
                        </ul>
                      </div>
                    </>
                  ))}
              </div>

              <div className="order-2 inline-block col-span-2 min-w-full sm:min-w-0 m-3 p-3 bg-white rounded shadow-md">
                <span className="font-bold text-gray-600 text-md text-secondary uppercase tracking-wider mr-4">
                  Basin Map
                </span>
                <span className="font-bold text-gray-500 text-sm lg:text-md text-secondary mr-4 xl:float-right">
                  SHG Extents (EPSG:5070): x_min: {basin.x_min}, y_min:{" "}
                  {basin.y_min}, x_max: {basin.x_max}, y_max: {basin.y_max}
                </span>

                <div className="h-64 mt-3 bg-gray-500">
                  <Map mapKey="exploreMap" height={"100%"} />
                </div>
              </div>
            </div>

            {/* <!--second row --> */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-2 mb-3">
              <div className="min-w-full sm:min-w-0 m-3 p-3 bg-white min-h-0 rounded shadow-md">
                <Plot
                  className="w-full h-64"
                  data={[
                    {
                      x: [1, 2, 3],
                      y: [2, 6, 3],
                      type: "line",
                      mode: "lines+markers",
                      marker: { color: "red" },
                    },
                    { type: "line", x: [1, 2, 3], y: [2, 5, 3] },
                  ]}
                  config={{ responsive: true }}
                  layout={{ title: "A Fancy Plot" }}
                />
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
);
