import { combineReducers } from 'redux';


import home from '../containers/home';

export default combineReducers({
    home: home.reducers
});
