import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import mySaga from './sagas/MySaga';
import houseControlSaga from './sagas/HouseControlSaga';

export default (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const reducer = combineReducers(reducers);

  const composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  const store = createStore(
      reducer,
      initialState,
      composeEnhancers(applyMiddleware(sagaMiddleware)),
    );

  sagaMiddleware.run(mySaga);
  sagaMiddleware.run(houseControlSaga);

  if (module.hot) {
    module
      .hot
      .accept('./reducers', () => {
        const nextRootReducer = require('./reducers');
        const nextReducer = combineReducers(nextRootReducer);
        store.replaceReducer(nextReducer);
      });
  }

  return store;
};
