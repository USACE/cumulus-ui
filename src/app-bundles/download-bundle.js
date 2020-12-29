import createRestBundle from "./create-rest-bundle";
import { createSelector } from "redux-bundler";

const downloadBundle = createRestBundle({
  name: "download",
  uid: "id",
  prefetch: true,
  staleAfter: 0,
  persist: false,
  routeParam: "",
  getTemplate: "/my_downloads",
  putTemplate: ":/",
  postTemplate: ":/",
  deleteTemplate: ":/",
  fetchActions: [],
  forceFetchActions: ["DOWNLOAD_REQUEST_FINISH"],
  urlParamSelectors: [],
  sortBy: "processing_start",
  sortAsc: false,
  addons: {
    doDownloadRequest: (payload) => ({ store, dispatch }) => {
      dispatch({ type: "DOWNLOAD_REQUEST_START" });

      const apiRoot = store.selectApiRoot();
      const authToken = store.selectAuthTokenRaw();

      fetch(`${apiRoot}/my_downloads`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken,
        },
      }).then((response) => {
        if (!response.ok) {
          console.log("ERROR in Download Request");
          console.log(`Request returned a ${response.status}`);
        }
        dispatch({ type: "DOWNLOAD_REQUEST_FINISH" });
      });
    },
  },
  reactDownloadInProgress: createSelector(
    "selectDownloadItemsArray",
    "selectDownloadIsLoading",
    (downloads, isLoading) => {
      // Short-Circuit; If isLoading, do not trigger another fetch
      // If state change from isLoading: True --> False then check for in
      // progress downloads and kick-off another fetch as necessary
      if (!!isLoading) {
        return null;
      }
      return downloads.filter(
        (d) => d.status === "INITIATED" && d.progress < 100
      ).length
        ? { actionCreator: "doDownloadFetch" }
        : null;
    }
  ),
  reduceFurther: (state, { type, payload }) => {
    switch (type) {
      case "DOWNLOAD_REQUEST_START":
      case "DOWNLOAD_REQUEST_FINISH":
        return Object.assign({}, state, payload);
      default:
        return state;
    }
  },
});

export default downloadBundle;
