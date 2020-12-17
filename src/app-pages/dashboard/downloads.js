import React from "react";
import { connect } from "redux-bundler-react";
import { DateTime } from "luxon";

const HEADERS = ["Basin", "Requested", "Processing Time", "Download"];

const ProgressBar = ({ percent }) => {
  return (
    <div className="flex flex-col">
      {/* Percent Complete */}
      <div className="w-100 text-right">
        <span className="text-xs font-mono">{percent}%</span>
      </div>
      {/* Progress Bar */}
      <div className="flex overflow-hidden h-2 mb-4 text-xs rounded bg-blue-200">
        <div
          style={{ width: `${percent}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
        ></div>
      </div>
    </div>
  );
};

const TableRow = ({ item }) => {
  const procStart = DateTime.fromISO(item.processing_start);
  const procEnd = DateTime.fromISO(item.processing_end);
  const dur = procEnd.diff(procStart, "seconds");

  const DownloadNow = ({ href }) => (
    <a href={href}>
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
  );

  const DownloadFailed = () => <span>FAILED!!!</span>;

  return (
    <tr>
      {/* Basin */}
      <td className="p-2 text-left">{item.watershed_name}</td>
      {/* Requested */}
      <td className="p-2 text-left">{procStart.toRelativeCalendar()}</td>
      <td className="p-2 text-left">{`${parseInt(dur.as("seconds"))}s`}</td>
      <td>
        {item.status === "SUCCESS" && item.progress === 100 ? (
          <DownloadNow href={item.file} />
        ) : item.status === "INITIATED" ? (
          <ProgressBar percent={item.progress} />
        ) : item.status === "FAILED" ? (
          <DownloadFailed />
        ) : null}
      </td>
    </tr>
  );
};

const TableHeader = ({ title }) => (
  <th
    scope="col"
    className="px-1 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  >
    {title}
  </th>
);

export default connect(
  "selectDownloadItemsArray",
  ({ downloadItemsArray: items }) => {
    return (
      <>
        <table className="min-w-full divide-y divide-gray-200 mt-5">
          <thead>
            <tr>
              {HEADERS.map((h, idx) => (
                <TableHeader title={h} />
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map((item, index) => (
              <TableRow key={index} item={item} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
);
