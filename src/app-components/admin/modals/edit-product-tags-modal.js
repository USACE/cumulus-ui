import React, { useState, useEffect } from 'react';
import { connect } from 'redux-bundler-react';

const EditProductTagsModal = connect(
  'selectModalProps',
  'doProductTagAdd',
  'doProductTagRemove',
  'selectTagItems',
  'doTagFetch',
  'doModalClose',
  ({
    modalProps: p,
    doTagFetch,
    doProductTagAdd,
    doProductTagRemove,
    tagItems: allTags,
    doModalClose,
  }) => {
    useEffect(() => {
      doTagFetch();
    }, [doTagFetch]);

    const [payload, setPayload] = useState(p);

    const handleToggle = (e, product_id, tag_id) => {
      // If Unchecked
      if (!e.target.checked) {
        setPayload({
          ...payload,
          tags: payload.tags.filter((item) => item !== tag_id),
        });
        doProductTagRemove(product_id, tag_id);
      } else {
        //if checked
        setPayload({
          ...payload,
          tags: payload.tags.concat(tag_id),
        });
        doProductTagAdd(product_id, tag_id);
      }
    };

    const TagsTable = ({ payload }) => {
      return (
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-200 text-gray-600'>
              <th className='p-2'>Name</th>
              <th>Description</th>
              <th className='p-2'>Toggle</th>
            </tr>
          </thead>
          <tbody>
            {allTags &&
              payload &&
              allTags.map((t, idx) => (
                <tr className='border-b-2 border-gray-200' key={idx}>
                  <td className='p-3'>
                    <span
                      className='rounded-xl p-1 text-sm'
                      style={{ backgroundColor: `#${t.color}` }}
                    >
                      {t.name}
                    </span>
                  </td>
                  <td>
                    <span className='p-2 text-sm text-gray-600'>
                      {t.description}
                    </span>
                  </td>
                  <td className='p-3'>
                    <input
                      type='checkbox'
                      {...(payload.tags.length &&
                      payload.tags.indexOf(t.id) > -1
                        ? { checked: true }
                        : null)}
                      onChange={(e) => handleToggle(e, payload.id, t.id)}
                      //   onChange={(e) => setPayload({...payload})}
                    />
                    {/* <div>{JSON.stringify(payload.tags.indexOf(t.id))}</div> */}
                  </td>
                </tr>
              ))}
          </tbody>
          {/* <div>{JSON.stringify(payload.tags)}</div> */}
        </table>
      );
    };

    return (
      <div
        className='mx-auto w-full'
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-headline'
      >
        <form className='p-6'>
          <fieldset>
            <div className='flex flex-row justify-between p-2 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg'>
              <legend className='mb-3 text-2xl'>
                {payload.tags ? payload.name + ' Tags' : 'Add Product Tags'}
              </legend>
              <svg
                className='w-6 h-6 cursor-pointer'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                onClick={(e) => {
                  doModalClose();
                }}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </div>

            <TagsTable payload={payload} />
          </fieldset>
        </form>
      </div>
    );
  }
);

export default EditProductTagsModal;
