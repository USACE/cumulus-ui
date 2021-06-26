import React from 'react';

const Table = ({ headers, items, itemFields, tools }) => {
  const TableHead = ({ items }) => {
    const lenItems = items.length;

    return (
      <thead>
        <tr>
          {items.map((t, idx) => (
            <th
              key={idx}
              className={`px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100${
                idx === 0
                  ? ' rounded-tl rounded-bl'
                  : idx === lenItems - 1
                  ? ' rounded-tr rounded-br flex justify-end'
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
            <tr className='border-b' key={p.id}>
              {/* Item Fields */}
              {!itemFields || !itemFields.length
                ? null
                : itemFields.map((f, idx) => (
                    <td className='px-4 py-3' key={idx}>
                      {!f.render ? p[f.key] : f.render(p[f.key])}
                    </td>
                  ))}

              {/* Tools */}
              <td className='px-4 py-3'>
                <div className='flex justify-end'>
                  {/* Edit Button */}
                  {tools.map((t, idx) => (
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
    <table className='table-auto w-full text-left whitespace-no-wrap'>
      <TableHead items={headers} />
      <TableBody items={items} tools={tools} />
    </table>
  );
};

export { Table };
