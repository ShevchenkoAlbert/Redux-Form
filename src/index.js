import React from 'react';
import ReactDOM from 'react-dom';
import	{ Provider }	from	'react-redux';
import { Router } from 'react-router-dom';
import { store, history }  from './store/store';
import Routes from './router';
import './index.css';
import App from './App';


ReactDOM.render((
	<Provider store={store}>
  	<Router history={history}>
	    <Routes />
	  </Router>
	</Provider>
), document.getElementById('root'));

