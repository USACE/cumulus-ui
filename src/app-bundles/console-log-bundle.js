export default {
  name: 'consoleLog',
  reducer: (state, { type, payload }) => {
    console.log(type, payload);
    return state || {};
  },
};
