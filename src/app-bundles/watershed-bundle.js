import createRestBundle from "./create-rest-bundle";

const watershedBundle = createRestBundle({
  name: "watershed",
  uid: "slug",
  prefetch: true,
  staleAfter: 10000,
  persist: false,
  routeParam: "ws_slug",
  getTemplate: "/cumulus/v1/watersheds",
  putTemplate: "/cumulus/v1/watersheds/:item.id",
  postTemplate: "/cumulus/v1/watersheds",
  deleteTemplate: "/cumulus/v1/watersheds/:item.id",
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

export default watershedBundle;
