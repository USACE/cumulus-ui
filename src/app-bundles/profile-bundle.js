import { createSelector } from "redux-bundler";

export default {
  name: "profile",
  getReducer: () => {
    const initialState = {
      _shouldFetch: false,
      myProfile: {},
    };

    return (state = initialState, { type, payload }) => {
      switch (type) {
        case "PROFILE_FETCH_START":
          return Object.assign({}, state, { _shouldFetch: false });
        case "PROFILE_DATA":
          return Object.assign({}, state, { myProfile: payload });
        case "AUTH_LOGGED_IN":
        case "AUTH_VERIFY_TOKEN":
        case "PROFILE_SAVED":
          return Object.assign({}, state, { _shouldFetch: true });
        default:
          return state;
      }
    };
  },
  doProfileFetch: () => ({ store, dispatch }) => {
    dispatch({ type: "PROFILE_FETCH_START" });

    const token = store.selectAuthTokenRaw();

    fetch("http://localhost:3030/cumulus/my_profile", {
      headers: { Authorization: "Bearer " + token },
    })
      .then((resp) => {
        console.log(resp.status);
        if (resp.status === 404) {
          console.log("New User; Redirect to /profile/create");
          store.doUpdateUrlWithHomepage("/profile/create");
          return {};
        }
        return resp.json();
      })
      .then((j) => {
        console.log(j);
        dispatch({ type: "PROFILE_DATA", payload: j });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  doProfileSave: (payload) => ({ store, dispatch }) => {
    const authToken = store.selectAuthTokenRaw();

    fetch("http://localhost:3030/cumulus/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken,
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          console.log("ERROR!!!!!!!!!!!");
          console.log(`Request returned a ${response.status}`);
        }
        response.json();
      })
      .then((j) => {
        dispatch({ type: "PROFILE_SAVED" });
        store.doUpdateUrlWithHomepage("/profile");
      });
  },
  selectProfileRaw: (state) => state.profile,
  selectProfileShouldFetch: (state) => state.profile._shouldFetch,
  selectProfileMyProfile: (state) => state.profile.myProfile,
  reactProfileShouldFetch: createSelector(
    "selectProfileShouldFetch",
    (shouldFetch) => {
      if (!shouldFetch) {
        return null;
      }
      return { actionCreator: "doProfileFetch" };
    }
  ),
};
