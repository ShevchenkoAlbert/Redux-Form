import React from 'react';
import { Route, Switch} from 'react-router-dom';
import FormPage from './components/FormPage';


const Routes = (props) => {
	return (
  		<Switch>
  			<Route path = '/' component = {FormPage} />
  		</Switch>
	)
}

export default Routes