import createRestBundle from "./create-rest-bundle";

const downloadBundle = createRestBundle({
  name: "download",
  uid: "id",
  prefetch: true,
  staleAfter: 0,
  persist: false,
  routeParam: "",
  getTemplate: "/downloads",
  putTemplate: "/downloads",
  postTemplate: "/downloads",
  deleteTemplate: ":/",
  fetchActions: [],
  forceFetchActions: ["DOWNLOAD_REQUEST_FINISH"],
  urlParamSelectors: [],
  addons: {
    doDownloadRequest: (payload) => ({ store, dispatch }) => {
      dispatch({ type: "DOWNLOAD_REQUEST_START" });

      const apiRoot = store.selectApiRoot();
      const authToken = store.selectAuthTokenRaw();

      fetch(`${apiRoot}/downloads`, {
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
        dispatch({ type: "DOWNLOAD_REQUEST_FINISH", payload: {} });
      });
    },
  },
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
