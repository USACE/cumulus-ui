import React from 'react';

const Table = ({ headers, items, tools }) => {
  const TableHead = ({ items }) => {
    const lenItems = items.length;

    return (
      <thead>
        <tr>
          {items.map((t, idx) => (
            <th
              className={`px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100${
                idx === 0
                  ? ' rounded-tl rounded-bl'
                  : idx === lenItems - 1
                  ? ' rounded-tr rounded-br'
                  : ''
              }`}
            >
              {t}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const TableBody = ({ items, tools }) => (
    <tbody>
      {!items || !items.length
        ? null
        : items.map((p, idx) => (
            // Item Attributes
            <tr className='border-b' key={idx}>
              <td className='px-4 py-3'>{p.name}</td>

              {/* Tools */}
              <td className='px-4 py-3'>
                <div className='flex justify-end'>
                  {/* Edit Button */}
                  {tools.map((t, idx) => (
                    <button className='px-2' onClick={(e) => t.handleClick(p)}>
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
    <table className='table-auto w-full text-left whitespace-no-wrap'>
      <TableHead items={headers} />
      <TableBody items={items} tools={tools} />
    </table>
  );
};

export { Table };
