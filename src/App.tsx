import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Router from 'router';

export default () => {
	const menu = [
		{ title: 'Home', path: '/' },
		{ title: 'About', path: '/about-us' },
		{ title: 'Events', path: '/events' },
		{ title: 'Membership', path: '/membership' },
		{ title: 'Get Involved', path: '/get-involved' },
		{ title: 'Gallery', path: '/gallery' },
		{ title: 'Store', path: '/store' }
	];

	return (
		<Router
			menu = { <Menu>
				{ menu.map(({ title, path }) => <Menu.Item>
					<NavLink exact to = { path }>{ title }</NavLink>
				</Menu.Item>) }
			</Menu> }
		/>
	);
};