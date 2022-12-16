import React, { useEffect } from 'react';

export const UserContext = React.createContext();
export const CustomerDetails = React.createContext();

export default function UserProvider(props) {
	const [nationalId, setNationalId] = React.useState(undefined);

	//Local storage setting and getting data:

	useEffect(() => {
		window.localStorage.getItem('user');
		const user = localStorage.setItem('user', nationalId);
		localStorage.setItem('user', user);
	});
	return (
		<UserContext.Provider value={{ nationalId, setNationalId }}>
			{/* what is rappped in the component becomes child */}

			{props.children}
		</UserContext.Provider>
	);
}

export const useUser = () => {
	const context = React.useContext(UserContext);
	if (!context) {
		//No access to the function if route is not wrapped

		throw new Error('useUser must be used within a userProvider');
	}
	return context;
};
