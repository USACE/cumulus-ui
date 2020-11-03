import { createSelector } from "redux-bundler"

export default {
    name: "profile",
    getReducer: () => {
        const initialState = { 
            _shouldFetch: false
        }

        return (state = initialState, { type, payload }) => {
          switch (type) {
              case "PROFILE_FETCH_START":
                  return Object.assign({}, state, {_shouldFetch: false})
              case "AUTH_LOGGED_IN":
                  return Object.assign({}, state, {_shouldFetch: true})
            default:
              return state;
          }
        };
      },
    doProfileFetch: () => ({store, dispatch}) => {
        dispatch({type: "PROFILE_FETCH_START"})
        
        const token = store.selectAuthTokenRaw()

        fetch(
            "http://localhost:3030/cumulus/my_profile",
            {
                headers: {Authorization: "Bearer "+token}
            }
        ).then(
            resp => {
                console.log(resp.status)
                if (resp.status === 400) {
                    console.log("New User; Redirect to /profile/create")
                    store.doUpdateUrlWithHomepage("/profile/create")
                    return { }
                }
                return resp.json()
            }
        ).then(j => {
            console.log("Got some JSON")
            console.log(j)
        }
        ).catch(err => {
            console.log(err)
        })
    },
    selectProfileRaw: state => state.profile,
    selectProfileShouldFetch: state => state.profile._shouldFetch,
    reactProfileShouldFetch: createSelector(
        "selectProfileShouldFetch",
        (shouldFetch) => {
            if (!shouldFetch) {
                return null
            }
            return { actionCreator: "doProfileFetch" }
        }
    ),
};