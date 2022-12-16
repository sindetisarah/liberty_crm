import React, { useEffect, useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../components/bootstrap/Card';
import { dashboardMenu, ticketsHeaders } from '../../helpers/menu';
import axiosInstance from '../../services/axiosInstance';
import CustomHelmet from '../../components/Helmet/Helmet';
import Table from '../../components/Table/Table';
import './PostVehicle.css'



const getValue = (passData) => {
	for (const key in status) {
		if (status.hasOwnProperty(key)) {
			if (parseInt(passData) === parseInt(key)) {
				const value = status[key];
				return value
			}
		}
	}
}

// eslint-disable-next-line react/prop-types
const ListVehicle = ({ isFluid, props }) => {
	const [vehicles, setVehicles] = useState([]);
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		getValue(2)
		axiosInstance.get(`route`).then((response) => {
			let results = response.data.body.results
			
			setVehicles(results)
			setLoading(false)
		}).catch(error => {
			setLoading(false)
			if (error.response.status === 401) {
				if (window.confirm('Your session has expired. We are logging you out?')) {
					localStorage.clear()
					window.location.reload()
				}
			} else {
				alert(`Request failed. Something Went Wrong. Please try again`)
			}
		});
	}, []);

	return (
		<>
			<CustomHelmet titleHeader={dashboardMenu.fleet.text} />
			<Card stretch={isFluid} borderSize={0}>
				<CardHeader borderSize={0} className="bg-light text-dark text-muted">
					<CardLabel icon='AirplaneTicket' iconColor='success'>
						<CardTitle>Vehicles</CardTitle>
					</CardLabel>
				</CardHeader>

				<CardBody className='table-responsive' isScrollable={isFluid}>
					{vehicles.length > 0 ? (
						<Table headers={ticketsHeaders} data={vehicles} />
					) :
						<div className='table__nodetail'>
							{loading ? `Fetching vehicles. Please wait...` : `Oops! Sorry No Vehicles found on fleet.`}
						</div>
					}
				</CardBody>
			</Card>
		</>
	);
};

export default ListVehicle;
