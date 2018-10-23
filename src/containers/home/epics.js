
import 'rxjs';
import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';
import * as ActionTypes from './actionTypes';

const pingEpic = action$ => action$.pipe(
    
    ofType( ActionTypes.PING),
    delay(1000), // Asynchronously wait 1000ms then continue
     mapTo({ type: ActionTypes.PONG })
  );
  

  export default [pingEpic];