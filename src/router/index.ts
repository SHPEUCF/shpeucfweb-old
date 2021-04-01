import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../pages';

export default () => (
	<BrowserRouter>
		<Switch>
			<Route exact path = '/Home' component { Home } />
		</Switch>
	</BrowserRouter>
);