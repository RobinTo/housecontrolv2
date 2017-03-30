export const actionTypes = {
  POST_RFOUTLET_CODE: 'POST_RFOUTLET_CODE', // Saga action to trigger rfoutlet code,
  POST_RFOUTLET_CODE_SUCCESS: 'POST_RFOUTLET_CODE_SUCCESS',
  POST_RFOUTLET_CODE_FAIL: 'POST_RFOUTLET_CODE_FAIL',
  UPDATE_WEATHER: 'UPDATE_WEATHER', // Saga action to update UPDATE_WEATHER
  UPDATE_WEATHER_SUCCESS: 'UPDATE_WEATHER_SUCCESS',
  UPDATE_WEATHER_FAIL: 'UPDATE_WEATHER_FAIL',
  UPDATE_BUSS_TIMES: 'UPDATE_BUSS_TIMES', // Saga action to update buss times
  UPDATE_BUSS_TIMES_SUCCESS: 'UPDATE_BUSS_TIMES_SUCCESS',
  UPDATE_BUSS_TIMES_FAIL: 'UPDATE_BUSS_TIMES_FAIL',
  GET_IMAGE_LIST: 'GET_IMAGE_LIST',
  GET_IMAGE_LIST_SUCCESS: 'GET_IMAGE_LIST_SUCCESS',
  GET_IMAGE_LIST_FAIL: 'GET_IMAGE_LIST_FAIL',
};

const defaultState = {
  outlets: [
    {
      name: 'Outlet 1',
      on: 1381717,
      off: 1381716,
    },
    {
      name: 'Outlet 2',
      on: 1394005,
      off: 1394004,
    },
    {
      name: 'Outlet 3',
      on: 1397077,
      off: 1397076,
    },
  ],
  weather: null,
  bussTimes: null,
  imageList: [],
};

export default(state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        weather: action.weather,
      });
    case actionTypes.UPDATE_BUSS_TIMES_SUCCESS:
      return Object.assign({}, state, {
        bussTimes: action.bussTimes,
      });
    case actionTypes.GET_IMAGE_LIST_SUCCESS:
      return Object.assign({}, state, {
        imageList: action.imageList,
      });
    default:
      return state;
  }
};

// Action creators
export const postOutletCode = code => ({ type: actionTypes.POST_RFOUTLET_CODE, code });
export const updateWeather = () => ({ type: actionTypes.UPDATE_WEATHER });
export const updateBussTimes = () => ({ type: actionTypes.UPDATE_BUSS_TIMES });
export const getImageList = () => ({ type: actionTypes.GET_IMAGE_LIST });
