import createRestBundle from "./create-rest-bundle";
import { createSelector } from "redux-bundler";

export default createRestBundle({
  name: "watershed",
  uid: "slug",
  prefetch: true,
  staleAfter: 10000,
  persist: false,
  routeParam: "ws_slug",
  getTemplate: "/cumulus/watersheds",
  putTemplate: "/cumulus/watersheds/:item.id",
  postTemplate: "/cumulus/watersheds",
  deleteTemplate: "/cumulus/watersheds/:item.id",
  fetchActions: ["URL_UPDATED", "AUTH_LOGGED_IN"],
  forceFetchActions: [],
  urlParamSelectors: [],
  addons: {
    // selectWatershedIdByRoute: createSelector(
    //   "selectWatershedByRoute",
    //   (watershed) => {
    //     if (!watershed) return {};
    //     return {
    //       projectId: project.id,
    //     };
    //   }
    // ),
  },
});
