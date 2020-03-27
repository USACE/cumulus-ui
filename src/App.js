import React from "react";
import "./css/App.scss";

import { connect } from "redux-bundler-react";

export default connect("selectRoute", ({ route: Route }) => {
  return (
    <div>
      <Route />
    </div>
  );
});
