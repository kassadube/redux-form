import { combineEpics } from 'redux-observable';
import epics from '../containers/home/epics';


export default combineEpics(...epics);