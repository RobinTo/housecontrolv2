
const defaultState = {
  outlets: [
    {
      on: 1381717,
      off: 1381716,
    },
    {
      on: 1394005,
      off: 1394004,
    },
    {
      on: 1397077,
      off: 1397076,
    },
  ],
};

export default(state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Action types
export const actionTypes = {
  POST_RFOUTLET_CODE: 'POST_RFOUTLET_CODE', // Saga action to trigger rfoutlet code,
  POST_RFOUTLET_CODE_SUCCESS: 'POST_RFOUTLET_CODE_SUCCESS',
  POST_RFOUTLET_CODE_FAIL: 'POST_RFOUTLET_CODE_FAIL',
};

// Action creators
export const postOutletCode = code => ({ type: actionTypes.POST_RFOUTLET_CODE, code });

