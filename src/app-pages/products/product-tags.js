import { connect } from 'redux-bundler-react';
// import { classNames } from '../../utils';

const Tag = ({ tags, id }) => {
  const tag = tags[id];
  // const cls = classNames(
  //   `px-2 inline-flex text-xs leading-5 font-semibold rounded-full`,
  //   tag.name === 'Realtime'
  //     ? 'bg-teal-300'
  //     : tag.name === 'Forecast'
  //     ? 'bg-yellow-300'
  //     : tag.name === 'Precipitation'
  //     ? 'bg-sky-300'
  //     : tag.name === 'Temperature'
  //     ? 'bg-red-400'
  //     : tag.name === 'Archive'
  //     ? 'bg-slate-300'
  //     : tag.name === 'Snow'
  //     ? 'bg-cyan-300'
  //     : 'bg-red-800'
  // );
  return (
    <span
      className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
      style={{ backgroundColor: `#${tag.color}` }}
      title={tag.description}
    >
      {tag.name}
    </span>
  );
};

export default connect(
  'selectTagItemsObject',
  ({ tagItemsObject: tags, product }) => {
    return (
      <div className='text-sm text-gray-900'>
        {product.tags.map((tagId, i) => {
          return <Tag key={i} tags={tags} id={tagId} />;
        })}
      </div>
    );
  }
);
