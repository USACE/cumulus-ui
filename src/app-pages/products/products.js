import { connect } from 'redux-bundler-react';

export default connect(
  'selectProductItems',
  'doProductFetch',
  ({ productItems: products, doProductFetch }) => {
    return (
      <>
        <h3>Produx</h3>
        <button onClick={doProductFetch}>FETCH</button>
        <div>
          {products.map((product, i) => {
            return <p key={i}>{product.name}</p>;
          })}
        </div>
      </>
    );
  }
);
