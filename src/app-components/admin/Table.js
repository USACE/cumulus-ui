import React from 'react';

const Table = ({ headers, items, itemFields, tools }) => {
  const TableHead = ({ items }) => {
    // const lenItems = items.length;

    return (
      <thead>
        <tr>
          {items.map((t, idx) => (
            <th
              key={idx}
              //   className={`px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100${
              //     idx === 0
              //       ? ' rounded-tl rounded-bl'
              //       : idx === lenItems - 1
              //       ? ' rounded-tr rounded-br flex justify-end'
              //       : ''
              //   }`}
              className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              {t}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const TableBody = ({ items, tools }) => (
    <tbody className='bg-white divide-y divide-gray-200'>
      {!items || !items.length
        ? null
        : items.map((p, idx) => (
            // Item Attributes
            <tr className='border-b' key={idx}>
              {/* Item Fields */}
              {!itemFields || !itemFields.length
                ? null
                : itemFields.map((f, idx) => (
                    <td
                      className={`px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500 ${
                        f.className || ''
                      }`}
                      key={idx}
                    >
                      {!f.render ? p[f.key] : f.render(p)}
                    </td>
                  ))}

              {/* Tools */}
              <td className='px-4 py-3'>
                <div className='flex justify-end'>
                  {/* Edit Button */}
                  {!tools || !tools.length
                    ? null
                    : tools.map((t, idx) => (
                        <button
                          key={idx}
                          className='px-2'
                          onClick={(e) => t.handleClick(p)}
                        >
                          {t.icon}
                        </button>
                      ))}
                </div>
              </td>
            </tr>
          ))}
    </tbody>
  );

  return (
    <table className='table-auto w-full text-left whitespace-no-wrap shadow-md'>
      <TableHead items={headers} />
      <TableBody items={items} tools={tools} />
    </table>
  );
};

export { Table };
