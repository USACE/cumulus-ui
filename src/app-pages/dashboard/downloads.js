import React from "react";

function downloads() {
  const dummyItems = [
    {
      id: "0b61af02-9775-4c3f-9c0e-718dd7b24039",
      basin_id: "0f065e6a-3380-4ac3-b576-89fae7774b9f",
      basin_name: "Little Sandy River",
      product_id: ["043516c0-df10-429c-820a-f2ceab59c190"],
      status: "SUCCESS",
      processing_start: "2020-11-19T16:00:57.439436Z",
      processing_end: "2020-11-19T16:01:01.010847Z",
      file:
        "https://api.rsgis.dev/cumulus/download/dss/download_0b61af02-9775-4c3f-9c0e-718dd7b24039.dss",
    },
    {
      id: "0b61af02-9775-4c3f-9c0e-718dd7b24039",
      basin_id: "0f065e6a-3380-4ac3-b576-89fae7774b9f",
      basin_name: "Little Sandy River",
      product_id: ["043516c0-df10-429c-820a-f2ceab59c190"],
      status: "SUCCESS",
      processing_start: "2020-11-19T16:00:57.439436Z",
      processing_end: "2020-11-19T16:01:01.010847Z",
      file:
        "https://api.rsgis.dev/cumulus/download/dss/download_0b61af02-9775-4c3f-9c0e-718dd7b24039.dss",
    },
  ];

  return (
    <table className="min-w-full divide-y divide-gray-200 mt-5">
      <thead>
        <tr>
          <th
            scope="col"
            className="px-1 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Basin
          </th>
          <th
            scope="col"
            className="px-1 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Date
          </th>
          <th
            scope="col"
            className="px-1 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Download
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {dummyItems.map((item, index) => {
          return (
            <tr key={index}>
              <td className="p-2 text-left">{item.basin_name}</td>
              <td className="p-2 text-left">{item.processing_start}</td>
              <td>
                <a href={item.file}>
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default downloads;
