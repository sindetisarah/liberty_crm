import React, { lazy } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { dashboardMenu, detailMenu } from '../../helpers/menu';

const LANDING = {
	DASHBOARD: lazy(() => import('../../pages/dashboard/DashboardPage')),
	FLEETDASHBOARD: lazy(() => import('../../pages/fleet/FleetDashboard')),
	CONVERSATION_DASHBOARD: lazy(() => import('../../pages/conversation/ConversationDashboard')),
	PAGENOTFOUND: lazy(() => import('../../pages/notfound/DashNotFound')),
	SACCODASHBOARD: lazy(() => import('../../pages/sacco/SaccoDashboard')),
	SACCO_DETAIL_DASHBOARD: lazy(() => import('../../pages/sacco/details/DetailDashboard'))
};

const ContentRoutes = () => {
	const location = useLocation();
	return (
		<Switch location={location}>
			<Route exact path={dashboardMenu.dashboard.path} component={LANDING.DASHBOARD} />

			<Route
				exact
				path={dashboardMenu.fleet.path}
				component={LANDING.FLEETDASHBOARD}
			/>

			<Route
				exact
				path={detailMenu.conversations.path}
				component={LANDING.CONVERSATION_DASHBOARD}
			/>

			<Route
				exact
				path={detailMenu.saccodetail.path}
				component={LANDING.SACCO_DETAIL_DASHBOARD}
			/>

			

			
			<Route exact path={dashboardMenu.sacco.path} component={LANDING.SACCODASHBOARD} />

			<Route path="*" component={LANDING.PAGENOTFOUND} />

		</Switch>
	);
};

export default ContentRoutes;
