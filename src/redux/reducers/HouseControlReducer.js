export const actionTypes = {
  POST_RFOUTLET_CODE: 'POST_RFOUTLET_CODE', // Saga action to trigger rfoutlet code,
  POST_RFOUTLET_CODE_SUCCESS: 'POST_RFOUTLET_CODE_SUCCESS',
  POST_RFOUTLET_CODE_FAIL: 'POST_RFOUTLET_CODE_FAIL',
  UPDATE_WEATHER: 'UPDATE_WEATHER', // Saga action to update UPDATE_WEATHER
  UPDATE_WEATHER_SUCCESS: 'UPDATE_WEATHER_SUCCESS',
  UPDATE_WEATHER_FAIL: 'UPDATE_WEATHER_FAIL',
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
};

export default(state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        weather: action.weather,
      });
    default:
      return state;
  }
};

// Action creators
export const postOutletCode = code => ({ type: actionTypes.POST_RFOUTLET_CODE, code });
export const updateWeather = () => ({ type: actionTypes.UPDATE_WEATHER });
