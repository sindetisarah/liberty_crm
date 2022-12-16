import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import MainHeader from '../../components/Header/MainHeader';
import DefaultHeader from '../../pages/common/DefaultHeader';
import { dashboardMenu, detailMenu } from '../../helpers/menu';

const HeaderRoutes = (props) => {
	const location = useLocation();
	const withoutHeaderPages = [
		dashboardMenu.dashboard.path,
	];

	return (
		<Switch location={location}>
			<Route path={[dashboardMenu.dashboard.path]} exact render={(props) => <MainHeader title="My Dashboard" shown={true} {...props} />} />
			<Route path={[dashboardMenu.fleet.path]} exact render={(props) => <MainHeader title="Fleet" shown={false} {...props} />} />
			<Route path={dashboardMenu.sacco.path} exact render={(props) => <MainHeader title="Sacco" shown={false} {...props} />} />
			<Route path={[detailMenu.saccodetail.path]} exact render={(props) => <MainHeader title="Sacco Details" shown={false} {...props} />} />
			{withoutHeaderPages.map((path) => (
				<Route key={path} path={path} exact />
			))}
			<Route component={DefaultHeader} />
		</Switch>
	);
};

export default HeaderRoutes;
