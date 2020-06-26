import createRestBundle from "./create-rest-bundle";
import { createSelector } from "redux-bundler";

export default createRestBundle({
  name: "product",
  uid: "id",
  prefetch: true,
  staleAfter: 10000,
  persist: false,
  routeParam: "product_id",
  getTemplate: "/cumulus/products",
  putTemplate: "/cumulus/products/:item.id",
  postTemplate: "/cumulus/products/:item.id",
  deleteTemplate: "/cumulus/products/:item.id",
  fetchActions: ["AUTH_LOGGED_IN"],
  urlParamSelectors: ["selectProductIdByRoute"],
  forceFetchActions: [],
  sortBy: "name",
  sortAsc: true,
  addons: {
    selectProductIdByRoute: createSelector(
      "selectProductByRoute",
      (product) => {
        if (product && product.id) return { product_id: product.id };
        return null;
      }
    ),
  },
});
