import createRestBundle from "./create-rest-bundle";

const watershedBundle = createRestBundle({
  name: "download",
  uid: "id",
  prefetch: true,
  staleAfter: 10000,
  persist: false,
  routeParam: "ws_slug",
  getTemplate: "/downloads",
  putTemplate: "/watersheds/:item.id",
  postTemplate: "/watersheds",
  deleteTemplate: "/watersheds/:item.id",
  fetchActions: ["URL_UPDATED", "AUTH_LOGGED_IN"],
  forceFetchActions: [],
  urlParamSelectors: [],
  addons: {},
});

export default watershedBundle;
