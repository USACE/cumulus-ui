function FilterPanelGroupItem({ item, checked, onChange }) {
  return (
    <div className='relative flex items-start'>
      <div className='flex items-center h-5'>
        <input
          id={`option-${item.id}`}
          aria-describedby='candidates-description'
          name={`option-${item.id}`}
          type='checkbox'
          className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
          checked={checked}
          onChange={(e) => {
            onChange({ id: item.id, checked: e.target.checked });
          }}
        />
      </div>
      <div className='ml-3 text-sm'>
        <label
          htmlFor={`option-${item.id}`}
          className='font-medium text-gray-700'
        >
          {item.name}
        </label>
        <p id='candidates-description' className='text-gray-500'>
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function FilterPanelGroup({
  title,
  items,
  checkedItems,
  onChange,
}) {
  const handleChange = (e) => {
    if (e.checked && checkedItems.indexOf(e.id) === -1) {
      onChange([...checkedItems, e.id]);
    } else {
      checkedItems.splice(checkedItems.indexOf(e.id), 1);
      onChange([...checkedItems]);
    }
  };

  return (
    <div className='first:mt-0 mt-5'>
      {/* <span className='text-sm font-medium text-gray-900'>
        {title}
        <span className='bg-gray-100 text-gray-600 ml-auto inline-block py-0.5 px-3 text-xs rounded-full'>
          X
        </span>
      </span> */}

      <span className='space-y-1'>
        <div className='group flex items-center px-3 py-2 text-sm font-medium rounded-md'>
          <span className='truncate'>{title}</span>
          <span
            onClick={() => {
              onChange([]);
            }}
            style={{ cursor: 'pointer' }}
            className='ml-auto inline-block py-0.5 px-3 text-xs rounded-full text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          >
            clear
          </span>
        </div>
      </span>

      <fieldset className='space-y-5 mt-3 mb-5'>
        {items.map((item) => {
          return (
            <FilterPanelGroupItem
              key={item.id}
              item={item}
              checked={checkedItems.indexOf(item.id) !== -1}
              onChange={handleChange}
            />
          );
        })}
      </fieldset>
      <hr />
    </div>
  );
}
