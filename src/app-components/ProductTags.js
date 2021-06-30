import React, { useEffect } from 'react';
import { connect } from 'redux-bundler-react';
import ReactTooltip from 'react-tooltip';

const ProductTags = connect(
  'selectTagItemsObject',
  'doTagFetch',
  ({ productTags, tagItemsObject: tagsObj, doTagFetch }) => {
    useEffect(() => {
      doTagFetch();
    }, [doTagFetch]);
    return tagsObj && Object.keys(tagsObj).length !== 0 ? (
      <div>
        {productTags &&
          productTags.map((productTagId, idx) => (
            <span
              key={idx}
              data-tip={tagsObj[productTagId].description}
              style={{
                backgroundColor: `#${tagsObj[productTagId].color}`,
              }}
              className='text-xs font-light px-2 py-1 rounded-xl mr-1'
            >
              {tagsObj[productTagId].name}
              <ReactTooltip />
            </span>
          ))}
      </div>
    ) : null;
  }
);

export default ProductTags;
