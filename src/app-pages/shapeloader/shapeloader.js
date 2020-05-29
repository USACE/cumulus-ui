import React from "react";
import Admin from "../admin/admin";
import UploadButton from "./upload-button";
import ShapeTable from "./shape-table";
import { ShapeFileInfo, ShapeGeoInfo } from "./shape-info";
import { connect } from "redux-bundler-react";

export default connect("selectShapefileJson", ({ shapefileJson }) => {
  return (
    <Admin>
      <div className="container mx-auto pt-4">
        <div className="flex content-center">
          <UploadButton>Upload</UploadButton>
          <ShapeFileInfo />
        </div>
        <ShapeGeoInfo />
        <div className="flex justify-around">
          <ShapeTable />
        </div>
      </div>
    </Admin>
  );
});
