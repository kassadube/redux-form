


import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './root_reducer';
import rootEpic from './root_epics';




const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = composeEnhancers(
  applyMiddleware(createLogger()),
  applyMiddleware(thunk),
  applyMiddleware(epicMiddleware),
);
const initialState = {home:{frfr: 4}};
//const store = createStore(rootReducer, defaultState, applyMiddleware(epicMiddleware));



  const configureStore = () => {
    const store = createStore(
        rootReducer,
        initialState,
        middlewares
    );
    epicMiddleware.run(rootEpic);
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./root_reducer', () => {
            store.replaceReducer(reducers); /* eslint-disable-line no-undef */
        });
    }

    return store;
};

export default configureStore;

//export const history = syncHistoryWithStore(browserHistory, store);


