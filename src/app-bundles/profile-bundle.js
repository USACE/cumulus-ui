import { createSelector } from 'redux-bundler';
const apiRoot = process.env.REACT_APP_CUMULUS_API_URL;

const profileBundle = {
  name: 'profile',
  getReducer: () => {
    const initialState = {
      _shouldFetch: false,
      _lastFetch: null,
      _lastError: null,
      myProfile: null,
    };

    return (state = initialState, { type, payload }) => {
      switch (type) {
        case 'PROFILE_FETCH_START':
          return Object.assign({}, state, { _shouldFetch: false });
        case 'PROFILE_FETCH_FINISH':
          return Object.assign({}, state, { myProfile: payload });
        case 'PROFILE_FETCH_FAIL':
          return { ...state, ...payload };
        case 'AUTH_LOGGED_OUT':
          return { ...state, myProfile: null };
        case 'PROFILE_TOKEN_CREATE_FINISH':
        case 'PROFILE_TOKEN_DELETE_FINISH':
        case 'AUTH_LOGGED_IN':
        case 'AUTH_VERIFY_TOKEN':
        case 'PROFILE_SAVED':
          return Object.assign({}, state, { _shouldFetch: true });
        case 'PROFILE_TOKEN_CREATE_START':
        case 'PROFILE_TOKEN_DELETE_START':
          return state;
        default:
          return state;
      }
    };
  },
  doProfileFetch:
    () =>
    ({ store, dispatch }) => {
      dispatch({ type: 'PROFILE_FETCH_START' });

      const token = store.selectAuthTokenRaw();

      fetch(`${apiRoot}/my_profile`, {
        headers: { Authorization: 'Bearer ' + token },
      })
        .then((resp) => {
          if (resp.status === 404) {
            console.log('New User; Redirect to /profile/create');
            store.doUpdateUrl('/profile/create');
            return {};
            // return null;
          } else if (resp.status === 200) {
            return resp.json();
          } else {
            throw Error(resp.json());
          }
        })
        .then((j) => {
          dispatch({ type: 'PROFILE_FETCH_FINISH', payload: j });
        })
        .catch((err) => {
          dispatch({
            type: 'PROFILE_FETCH_FAIL',
            payload: { _lastError: err },
          });
        });
    },
  doProfileSave:
    (payload) =>
    ({ store, dispatch }) => {
      //const apiRoot = store.selectApiRoot();
      const authToken = store.selectAuthTokenRaw();

      fetch(`${apiRoot}/my_profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + authToken,
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) {
            console.error(`Request returned a ${response.status}`);
          }
          response.json();
        })
        .then((j) => {
          dispatch({ type: 'PROFILE_SAVED' });
          store.doUpdateUrl('/profile');
        });
    },
  doProfileTokenCreate:
    (item) =>
    ({ dispatch, store }) => {
      //const apiRoot = store.selectApiRoot();
      const authToken = store.selectAuthTokenRaw();

      dispatch({ type: 'PROFILE_TOKEN_CREATE_START' });
      fetch(`${apiRoot}/my_tokens`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + authToken,
        },
      })
        .then((response) => {
          if (!response.ok) {
            console.error(
              `Create Token: Request returned a ${response.status}`
            );
          }
          return response.json();
        })
        .then((j) => {
          dispatch({ type: 'PROFILE_TOKEN_CREATE_FINISH' });
          return { secretTokenInfo: j };
        });
    },
  doProfileTokenDelete:
    (item) =>
    ({ store, dispatch }) => {
      dispatch({ type: 'PROFILE_TOKEN_DELETE_START' });

      //const apiRoot = store.selectApiRoot();
      const authToken = store.selectAuthTokenRaw();

      fetch(`${apiRoot}/my_tokens/${item.token_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + authToken,
        },
      })
        .then((response) => {
          if (!response.ok) {
            console.error(`Request returned a ${response.status}`);
          }
          response.json();
        })
        .then((j) => {
          dispatch({ type: 'PROFILE_TOKEN_DELETE_FINISH' });
        });
    },
  selectProfileRaw: (state) => state.profile,
  selectProfileShouldFetch: (state) => state.profile._shouldFetch,
  selectProfileMyProfile: (state) => state.profile.myProfile,
  selectProfileTokens: createSelector('selectProfileMyProfile', (profile) =>
    profile && profile.tokens && profile.tokens.length ? profile.tokens : []
  ),
  selectProfileLastError: (state) => state.profile._lastError,
  reactProfileShouldFetch: createSelector(
    'selectProfileShouldFetch',
    (shouldFetch) => {
      if (!shouldFetch) {
        return null;
      }
      return { actionCreator: 'doProfileFetch' };
    }
  ),
};

export default profileBundle;
