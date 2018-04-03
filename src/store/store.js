
import { createStore, applyMiddleware} from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducer';
import logger from 'redux-logger';

export const history = createBrowserHistory();
const middleware = applyMiddleware(logger, thunk, routerMiddleware(history))
export const store = createStore(
  	rootReducer, 
  	composeWithDevTools(middleware)
  	)