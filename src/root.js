import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './store/create_store';
import AppLayout from './components/app_layout';


const store = configureStore();
const Root = (/* props */) => (
    <Provider store={store}>
        <BrowserRouter >            
                <AppLayout />           
        </BrowserRouter>
    </Provider>
);
window.store = store;
store.dispatch({type: 'home/ping'});
export default Root;
