import { BrowserRouter, Route } from 'react-router-dom';
import { Home, About, Events, Membership, Involvement, Gallery, Store } from 'pages';

export default ({ menu }: { menu: JSX.Element }) => (
	<BrowserRouter>
		{ menu }
		<Route exact path = '/' component = { Home } />
		<Route exact path = '/about-us' component = { About } />
		<Route exact path = '/events' component = { Events } />
		<Route exact path = '/membership' component = { Membership } />
		<Route exact path = '/get-involved' component = { Involvement } />
		<Route exact path = '/gallery' component = { Gallery } />
		<Route exact path = '/store' component = { Store } />
	</BrowserRouter>
);