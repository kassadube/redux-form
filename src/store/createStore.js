


import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers/index';
import rootEpic from './epics';

const defaultState = {};


const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const store = createStore(rootReducer, defaultState, applyMiddleware(epicMiddleware));
const store = createStore(
    combineReducers({
        rootReducer,
    }),
    defaultState,
    composeEnhancers(
      applyMiddleware(
        epicMiddleware
      )
    )
  );
epicMiddleware.run(rootEpic);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
