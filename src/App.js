import React from "react";
import "./css/tailwind.generated.css";

import { connect } from "redux-bundler-react";

export default connect("selectRoute", ({ route: Route }) => {
  return (
    <div>
      <Route />
    </div>
  );
});
