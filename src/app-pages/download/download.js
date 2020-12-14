import React from "react";
import Navbar from "../../app-components/navbar";
import PageHeading from "../../app-components/page-heading";
import { connect } from "redux-bundler-react";

export default connect("selectAuthUsername", (props) => {
  const basins = [
    {
      id: "01313583-8fed-4235-8cf2-df5fe23b4b2a",
      name: "Hatchie River",
      x_min: 542000,
      y_min: 1296000,
      x_max: 694000,
      y_max: 1444000,
      office_symbol: "MVM",
    },
    {
      id: "03206ff6-fe91-426c-a5e9-4c651b06f9c6",
      name: "Eau Galla River",
      x_min: 284000,
      y_min: 2404000,
      x_max: 326000,
      y_max: 2460000,
      office_symbol: "MVP",
    },
    {
      id: "048ce853-6642-4ac4-9fb2-81c01f67a85b",
      name: "Mississippi River Headwaters",
      x_min: 24000,
      y_min: 2402000,
      x_max: 254000,
      y_max: 2760000,
      office_symbol: "MVP",
    },
    {
      id: "0573081e-c72c-4bf9-9709-7f62ecd80a64",
      name: "Bill Williams River",
      x_min: -1652000,
      y_min: 1354000,
      x_max: -1494000,
      y_max: 1522000,
      office_symbol: "SPL",
    },
    {
      id: "070204a3-66d9-471c-bd6e-ab59ea0858bb",
      name: "Crooked River",
      x_min: -2006000,
      y_min: 2512000,
      x_max: -1854000,
      y_max: 2668000,
      office_symbol: "NWP",
    },
    {
      id: "074ff6ed-69b1-4958-87a5-9cd68fde7030",
      name: "Upper Ohio River",
      x_min: 1244000,
      y_min: 1942000,
      x_max: 1300000,
      y_max: 1976000,
      office_symbol: "LRP",
    },
    {
      id: "08ee0918-b869-46c5-b9fd-e02f88ceff64",
      name: "Green River",
      x_min: -1980000,
      y_min: 2934000,
      x_max: -1900000,
      y_max: 3010000,
      office_symbol: "NWS",
    },
    {
      id: "0c06e6d6-68f3-4943-a95e-22ef82696e7e",
      name: "Connecticut River",
      x_min: 1820000,
      y_min: 2266000,
      x_max: 1958000,
      y_max: 2734000,
      office_symbol: "NAE",
    },
    {
      id: "0d53c4da-8712-4e99-9824-1695e3e1966c",
      name: "Rio Hondo",
      x_min: -914000,
      y_min: 1158000,
      x_max: -770000,
      y_max: 1226000,
      office_symbol: "SPA",
    },
    {
      id: "0f065e6a-3380-4ac3-b576-89fae7774b9f",
      name: "Little Sandy River",
      x_min: 1096000,
      y_min: 1732000,
      x_max: 1158000,
      y_max: 1812000,
      office_symbol: "LRH",
    },
    {
      id: "11cddcb1-aca6-4398-b5bd-f10e19826c16",
      name: "Tranquitas Creek",
      x_min: -214000,
      y_min: 488000,
      x_max: -174000,
      y_max: 522000,
      office_symbol: "SWG",
    },
    {
      id: "11e92768-81ed-4b62-9179-1f010ac9bb97",
      name: "Thames River",
      x_min: 1916000,
      y_min: 2268000,
      x_max: 1992000,
      y_max: 2396000,
      office_symbol: "NAE",
    },
    {
      id: "14c56e44-c8aa-4f89-a226-3e99e181d522",
      name: "Neches River",
      x_min: -42000,
      y_min: 724000,
      x_max: 276000,
      y_max: 1144000,
      office_symbol: "SWF",
    },
    {
      id: "14eb04fc-7eb8-4322-a2a0-999e371ca989",
      name: "Cowlitz River",
      x_min: -2070000,
      y_min: 2838000,
      x_max: -1918000,
      y_max: 2922000,
      office_symbol: "NWP",
    },
    {
      id: "151d8075-a6b7-45f2-92ed-360b4f7f7b47",
      name: "Area 3",
      x_min: 1514000,
      y_min: 418000,
      x_max: 1572000,
      y_max: 498000,
      office_symbol: "SAJ",
    },
    {
      id: "1572c0a6-e9b9-420a-85dc-ae9d9ac8f958",
      name: "Housatonic River",
      x_min: 1820000,
      y_min: 2240000,
      x_max: 1896000,
      y_max: 2404000,
      office_symbol: "NAE",
    },
    {
      id: "15e50ede-337b-4bbf-a6fa-1be57d1b8715",
      name: "Above Fort Peck",
      x_min: -1394000,
      y_min: 2460000,
      x_max: -740000,
      y_max: 2998000,
      office_symbol: "NWO",
    },
  ];

  const products = [
    {
      id: "7c7ba37a-efad-499e-9c3a-5354370b8e9e",
      group_id: "726039da-2f21-4393-a15c-5f6e7ea41b1f",
      group: "PRECIPITATION",
      is_forecast: false,
      is_realtime: true,
      name: "ncep_mrms_v12_MultiSensor_QPE_01H_Pass2",
      temporal_resolution: "3600",
      temporal_duration: "0",
      dss_fpart: "NCEP-MRMSV12-QPE-01H-PASS2",
      parameter: "PRECIP",
      unit: "MM",
      after: "2020-11-05T21:00:00Z",
      before: "2020-12-02T20:00:00Z",
      productfile_count: 2,
      percent_coverage: 0.31,
    },
    {
      id: "30a6d443-80a5-49cc-beb0-5d3a18a84caa",
      group_id: "726039da-2f21-4393-a15c-5f6e7ea41b1f",
      group: "PRECIPITATION",
      is_forecast: false,
      is_realtime: true,
      name: "ncep_mrms_v12_MultiSensor_QPE_01H_Pass1",
      temporal_resolution: "3600",
      temporal_duration: "0",
      dss_fpart: "NCEP-MRMSV12-QPE-01H-PASS1",
      parameter: "PRECIP",
      unit: "MM",
      after: "2020-11-05T22:00:00Z",
      before: "2020-12-02T21:00:00Z",
      productfile_count: 2,
      percent_coverage: 0.31,
    },
    {
      id: "f1b6ac38-bbc9-48c6-bf78-207005ee74fa",
      group_id: "726039da-2f21-4393-a15c-5f6e7ea41b1f",
      group: "PRECIPITATION",
      is_forecast: false,
      is_realtime: true,
      name: "ncep_mrms_gaugecorr_qpe_01h",
      temporal_resolution: "3600",
      temporal_duration: "0",
      dss_fpart: "NCEP-MRMS-QPE-GAUGECORR",
      parameter: "PRECIP",
      unit: "MM",
      after: "2020-09-03T15:00:00Z",
      before: "2020-09-21T19:00:00Z",
      productfile_count: 4,
      percent_coverage: 0.92,
    },
    {
      id: "64756f41-75e2-40ce-b91a-fda5aeb441fc",
      group_id: "726039da-2f21-4393-a15c-5f6e7ea41b1f",
      group: "PRECIPITATION",
      is_forecast: false,
      is_realtime: true,
      name: "prism_ppt_early",
      temporal_resolution: "86400",
      temporal_duration: "86400",
      dss_fpart: "PRISM-EARLY",
      parameter: "PRECIP",
      unit: "MM",
      after: null,
      before: null,
      productfile_count: 0,
      percent_coverage: 0,
    },
    {
      id: "ba1cc336-6cc0-4648-85a4-dd100e0ff411",
      group_id: "726039da-2f21-4393-a15c-5f6e7ea41b1f",
      group: "PRECIPITATION",
      is_forecast: false,
      is_realtime: true,
      name: "ncep_rtma_precip",
      temporal_resolution: "3600",
      temporal_duration: "3600",
      dss_fpart: "NDGD-RTMA",
      parameter: "PRECIP",
      unit: "MM",
      after: null,
      before: null,
      productfile_count: 0,
      percent_coverage: 0,
    },
    {
      id: "44f1ea4d-6903-4b06-8677-d1fd84dd7b34",
      group_id: "d9613031-7cf0-4722-923e-e5c3675a163b",
      group: "TEMPERATURE",
      is_forecast: false,
      is_realtime: true,
      name: "ncep_rtma_ru_ges_airtemp",
      temporal_resolution: "900",
      temporal_duration: "0",
      dss_fpart: "NCEP-RTMA-RU-GES",
      parameter: "AIRTEMP",
      unit: "DEG C",
      after: null,
      before: null,
      productfile_count: 0,
      percent_coverage: 0,
    },
    {
      id: "e4fdadc7-5532-4910-9ed7-3c3690305d86",
      group_id: "d9613031-7cf0-4722-923e-e5c3675a163b",
      group: "TEMPERATURE",
      is_forecast: false,
      is_realtime: true,
      name: "ncep_rtma_ru_anl_airtemp",
      temporal_resolution: "900",
      temporal_duration: "0",
      dss_fpart: "NCEP-RTMA-RU-ANL",
      parameter: "AIRTEMP",
      unit: "DEG C",
      after: "2020-09-21T11:30:00Z",
      before: "2020-09-21T16:30:00Z",
      productfile_count: 2,
      percent_coverage: 10,
    },
    {
      id: "62e08d34-ff6b-45c9-8bb9-80df922d0779",
      group_id: "d9613031-7cf0-4722-923e-e5c3675a163b",
      group: "TEMPERATURE",
      is_forecast: false,
      is_realtime: true,
      name: "prism_tmin_early",
      temporal_resolution: "86400",
      temporal_duration: "86400",
      dss_fpart: "PRISM-EARLY",
      parameter: "AIRTEMP",
      unit: "DEG C",
      after: null,
      before: null,
      productfile_count: 0,
      percent_coverage: 0,
    },
    {
      id: "6357a677-5e77-4c37-8aeb-3300707ca885",
      group_id: "d9613031-7cf0-4722-923e-e5c3675a163b",
      group: "TEMPERATURE",
      is_forecast: false,
      is_realtime: true,
      name: "prism_tmax_early",
      temporal_resolution: "86400",
      temporal_duration: "86400",
      dss_fpart: "PRISM-EARLY",
      parameter: "AIRTEMP",
      unit: "DEG C",
      after: null,
      before: null,
      productfile_count: 0,
      percent_coverage: 0,
    },
    {
      id: "816abf9e-d9b8-4ba8-9532-78e36409b0b0",
      group_id: "d9613031-7cf0-4722-923e-e5c3675a163b",
      group: "TEMPERATURE",
      is_forecast: false,
      is_realtime: true,
      name: "ncep_rtma_airtemp",
      temporal_resolution: "3600",
      temporal_duration: "0",
      dss_fpart: "NDGD-RTMA",
      parameter: "AIRTEMP",
      unit: "DEG C",
      after: null,
      before: null,
      productfile_count: 0,
      percent_coverage: 0,
    },
    {
      id: "10011d9c-04a4-454d-88a0-fb7ba0d64d37",
      group_id: "57bda84f-ecec-4cd7-b3b1-c0c36f838a05",
      group: "SNOW",
      is_forecast: false,
      is_realtime: true,
      name: "nohrsc_snodas_snowmelt_interpolated",
      temporal_resolution: "86400",
      temporal_duration: "86400",
      dss_fpart: "SNODAS-INTERP",
      parameter: "SNOW MELT",
      unit: "MM",
      after: null,
      before: null,
      productfile_count: 0,
      percent_coverage: 0,
    },
    {
      id: "e97fbc56-ebe2-4d5a-bcd4-4bf3744d8a1b",
      group_id: "57bda84f-ecec-4cd7-b3b1-c0c36f838a05",
      group: "SNOW",
      is_forecast: false,
      is_realtime: true,
      name: "nohrsc_snodas_snowpack_avg_temperature_interpolated",
      temporal_resolution: "86400",
      temporal_duration: "0",
      dss_fpart: "SNODAS-INTERP",
      parameter: "SNOWTEMP",
      unit: "K",
      after: null,
      before: null,
      productfile_count: 0,
      percent_coverage: 0,
    },
    {
      id: "33407c74-cdc2-4ab2-bd9a-3dff99ea02e4",
      group_id: "57bda84f-ecec-4cd7-b3b1-c0c36f838a05",
      group: "SNOW",
      is_forecast: false,
      is_realtime: true,
      name: "nohrsc_snodas_coldcontent_interpolated",
      temporal_resolution: "86400",
      temporal_duration: "0",
      dss_fpart: "SNODAS-INTERP",
      parameter: "COLD CONTENT",
      unit: "MM",
      after: null,
      before: null,
      productfile_count: 0,
      percent_coverage: 0,
    },
    {
      id: "2274baae-1dcf-4c4c-92bb-e8a640debee0",
      group_id: "57bda84f-ecec-4cd7-b3b1-c0c36f838a05",
      group: "SNOW",
      is_forecast: false,
      is_realtime: true,
      name: "nohrsc_snodas_snowdepth_interpolated",
      temporal_resolution: "86400",
      temporal_duration: "0",
      dss_fpart: "SNODAS-INTERP",
      parameter: "SNOW DEPTH",
      unit: "MM",
      after: null,
      before: null,
      productfile_count: 0,
      percent_coverage: 0,
    },
    {
      id: "517369a5-7fe3-4b0a-9ef6-10f26f327b26",
      group_id: "57bda84f-ecec-4cd7-b3b1-c0c36f838a05",
      group: "SNOW",
      is_forecast: false,
      is_realtime: true,
      name: "nohrsc_snodas_swe_interpolated",
      temporal_resolution: "86400",
      temporal_duration: "0",
      dss_fpart: "SNODAS-INTERP",
      parameter: "SWE",
      unit: "MM",
      after: null,
      before: null,
      productfile_count: 0,
      percent_coverage: 0,
    },
    {
      id: "c2f2f0ed-d120-478a-b38f-427e91ab18e2",
      group_id: "57bda84f-ecec-4cd7-b3b1-c0c36f838a05",
      group: "SNOW",
      is_forecast: false,
      is_realtime: true,
      name: "nohrsc_snodas_coldcontent",
      temporal_resolution: "86400",
      temporal_duration: "0",
      dss_fpart: "SNODAS",
      parameter: "COLD CONTENT",
      unit: "MM",
      after: null,
      before: null,
      productfile_count: 0,
      percent_coverage: 0,
    },
    {
      id: "86526298-78fa-4307-9276-a7c0a0537d15",
      group_id: "57bda84f-ecec-4cd7-b3b1-c0c36f838a05",
      group: "SNOW",
      is_forecast: false,
      is_realtime: true,
      name: "nohrsc_snodas_snowmelt",
      temporal_resolution: "86400",
      temporal_duration: "86400",
      dss_fpart: "SNODAS",
      parameter: "SNOW MELT",
      unit: "MM",
      after: null,
      before: null,
      productfile_count: 0,
      percent_coverage: 0,
    },
    {
      id: "57da96dc-fc5e-428c-9318-19f095f461eb",
      group_id: "57bda84f-ecec-4cd7-b3b1-c0c36f838a05",
      group: "SNOW",
      is_forecast: false,
      is_realtime: true,
      name: "nohrsc_snodas_snowpack_avg_temperature",
      temporal_resolution: "86400",
      temporal_duration: "0",
      dss_fpart: "SNODAS",
      parameter: "SNOWTEMP",
      unit: "K",
      after: null,
      before: null,
      productfile_count: 0,
      percent_coverage: 0,
    },
    {
      id: "757c809c-dda0-412b-9831-cb9bd0f62d1d",
      group_id: "57bda84f-ecec-4cd7-b3b1-c0c36f838a05",
      group: "SNOW",
      is_forecast: false,
      is_realtime: true,
      name: "nohrsc_snodas_swe",
      temporal_resolution: "86400",
      temporal_duration: "0",
      dss_fpart: "SNODAS",
      parameter: "SWE",
      unit: "MM",
      after: null,
      before: null,
      productfile_count: 0,
      percent_coverage: 0,
    },
    {
      id: "e0baa220-1310-445b-816b-6887465cc94b",
      group_id: "57bda84f-ecec-4cd7-b3b1-c0c36f838a05",
      group: "SNOW",
      is_forecast: false,
      is_realtime: true,
      name: "nohrsc_snodas_snowdepth",
      temporal_resolution: "86400",
      temporal_duration: "0",
      dss_fpart: "SNODAS",
      parameter: "SNOW DEPTH",
      unit: "MM",
      after: "2016-01-06T06:00:00Z",
      before: "2020-08-17T00:00:00Z",
      productfile_count: 4,
      percent_coverage: 0.24,
    },
  ];

  return (
    <main className="bg-gray-200 h-full lg:h-screen">
      <Navbar />
      <div className="mx-auto max-w-screen-2xl sm:p-10">
        <PageHeading
          heading={"Cumulus Downloads"}
          subHeading={"Meteorology With Simple Data Access"}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="order-1 min-w-full sm:min-w-0 m-3 p-3 bg-white min-h-0 rounded shadow-md border-l-8 border-gray-600">
            <form className="">
              <fieldset>
                <legend className="mb-3 text-2xl">DSS Download</legend>
                <div className="">
                  <div className="p-1 block xl:bg-gray-100 font-bold text-gray-600 text-sm text-secondary uppercase tracking-wider">
                    Time Window
                  </div>
                  <label forHtml="startDate">Start:</label>
                  <input id="startDate" type="date" />
                  <label forHtml="endDate" className="ml-2">
                    End:
                  </label>
                  <input id="endDate" type="date" />
                </div>
                <div className="mt-3">
                  <label
                    forHtml="watershed"
                    className="p-1 block xl:bg-gray-100 font-bold text-gray-600 text-sm text-secondary uppercase tracking-wider"
                  >
                    Watershed
                  </label>
                  <select
                    name="watershed"
                    id="watershed"
                    className="p-1 bg-white"
                  >
                    {basins.map((value, index) => {
                      return (
                        <option value={value.name}>
                          {value.office_symbol}-{value.name}
                        </option>
                      );
                    })}
                    {/* <Select options={option} /> */}
                  </select>
                </div>
                <div className="">
                  <label
                    forHtml="products"
                    className="block xl:bg-gray-300 w-full p-1 mt-5 font-bold text-gray-600 text-sm text-secondary uppercase tracking-wider"
                  >
                    Products
                  </label>
                  <select
                    name="products"
                    id="products"
                    className="p-1 h-48 block"
                    multiple
                  >
                    {products.map((value, index) => {
                      return <option value={value.name}>{value.name}</option>;
                    })}
                  </select>
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
          <div className="order-2 min-w-full sm:min-w-0 m-3 p-3 bg-gray-100 min-h-0 rounded shadow-md border-l-8 border-gray-200">
            <h3 className="mb-3 text-2xl">Download Info:</h3>
            <div className="block mb-2 w-full p-1 mt-5 font-bold text-gray-600 text-sm text-secondary uppercase tracking-wider">
              Request Payload
            </div>
            <textarea rows="5" cols="60" className="w-full">
              {JSON.stringify(
                {
                  datetime_start: "2020-11-18T06:00:00Z",
                  datetime_end: "2020-12-02T06:00:00Z",
                  basin_id: "f019ffec-e9d3-48e6-ab74-eaa8fd8065e0",
                  product_id: ["e4fdadc7-5532-4910-9ed7-3c3690305d86"],
                },
                null,
                2
              )}
            </textarea>
            <div className="block mb-2 w-full p-1 mt-5 font-bold text-gray-600 text-sm text-secondary uppercase tracking-wider">
              Download Status:
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                    Task in progress
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-green-600">
                    50%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div
                  style={{ width: "50%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                ></div>
              </div>
            </div>
            <button
              disabled
              className="bg-gray-300 /*hover:bg-gray-400*/ cursor-not-allowed opacity-50 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
});
