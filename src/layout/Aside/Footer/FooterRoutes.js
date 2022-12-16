import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Footer from './Footer';
import { authMenu, dashboardMenu } from '../../../helpers/menu';
const FooterRoutes = () => {
	const location = useLocation();

	//	Add paths to the array that you don't want to be "Footer".
	const withoutFooterPages = [
		
		dashboardMenu.fleet.path,
		dashboardMenu.sacco.path
	]
	return (
		<Switch location={location}>
			{/* BEGIN :: Without Footer */}
			{withoutFooterPages.map((path) => (
				<Route key={path} path={path} exact />
			))}
			{/* END :: Without Footer */}


			<Route component={Footer} />
		</Switch>
	);
};

export default FooterRoutes;
