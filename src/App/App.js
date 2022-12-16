import React, { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from '../layout/Dashboard/Dashboard';
import UserProvider from '../contexts/userContext';
import Login from '../pages/Login/Login';
import CustomerProvider from '../contexts/phoneContext';
import Logout from '../pages/Logout/Logout';
import NotFoundPage from '../pages/notfound/NotFoundPage';
import Spinner from '../components/Spinner/Spinner';
import ProtectedRoute from '../routes/protectedRoute';

function App() {
	const [flag, setFlag] = useState(false);
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		window.dataLayer.push({
			'userId': localStorage.getItem('query') === null ? "Anonymous" : localStorage.getItem('query'),
			'event': 'userIdSet',
		})
		axiosInstance.defaults.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
		axiosInstance.get(`jwttoken/validation`).then(res => {
			setFlag(res.data.headers.status)
			setLoading(false)
		}).catch(error => {
			setFlag(false)
			setLoading(false)
		});
	}, [])

	return (
		<>{loading === false &&
			<CustomerProvider>

				<UserProvider>

					<Router>

						<div className="App">
							<Switch>
								<Route exact path="/" render={() => flag ? <Redirect to="/dashboard" /> : <Login />} />

								<Route path="/dashboard" component={Dashboard} />


								<ProtectedRoute exact path="/logout" component={Logout} />

								<Route path="*" component={NotFoundPage} />

							</Switch>
						</div>
					</Router>

				</UserProvider>
			</CustomerProvider>
		}
			{loading === true && <Spinner />}
		</>




	)






}

export default App