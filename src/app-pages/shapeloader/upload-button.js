import React, { useRef } from "react";
import classnames from "classnames";
import { connect } from "redux-bundler-react";

export default connect("doShapefileQueueZip", ({ doShapefileQueueZip }) => {
  const inputEl = useRef(null);

  const handleClick = (e) => {
    inputEl.current.click();
  };

  const handleInputChange = (e) => {
    doShapefileQueueZip(inputEl.current.files[0]);
  };

  const btnClass = classnames({
    "p-4 rounded border-2 border-green-400": true,
  });

  return (
    <>
      <button className={btnClass} onClick={handleClick}>
        Upload File
      </button>
      <input
        style={{ display: "none" }}
        ref={inputEl}
        type="file"
        onChange={handleInputChange}
      ></input>
    </>
  );
});
