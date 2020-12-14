import React from "react";

function basins() {
  const dummyItems = [
    {
      id: "7c6dd902-fbc5-43e4-9bbf-351963f5723d",
      name: "Muskingum River",
      office_symbol: "LRH",
    },
    {
      id: "ced6ec9e-43b5-496e-a2b7-894af92c9b63",
      name: "Mississippi River Navigation",
      office_symbol: "MVP",
    },
    {
      id: "0f065e6a-3380-4ac3-b576-89fae7774b9f",
      name: "Little Sandy River",
      office_symbol: "LRH",
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
            Name
          </th>
          <th
            scope="col"
            className="px-1 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Office
          </th>
          <th
            scope="col"
            className="px-1 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {dummyItems.map((value, index) => {
          return (
            <tr key={index}>
              <td className="p-2 text-left">
                <button>{value.name}</button>
              </td>
              <td className="p-2 text-left">{value.office_symbol}</td>
              <td>
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default basins;
