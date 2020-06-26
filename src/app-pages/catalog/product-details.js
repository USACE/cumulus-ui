import React from "react";
import Navbar from "../../app-components/navbar";
import { connect } from "redux-bundler-react";

export default connect(
  "selectProductByRoute",
  ({ productByRoute: product }) => {
    return (
      <main>
        <Navbar />
        <div className="container mx-auto">
          <h1 className="mt-12 text-3xl">Product Details</h1>
          <hr className="mt-4" />
          <div className="space-y-12 mt-16 mb-10 max-w-xl">
            {product && product.name}
          </div>
        </div>
      </main>
    );
  }
);
