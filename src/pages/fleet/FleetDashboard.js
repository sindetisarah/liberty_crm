import React, { useEffect, useState } from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../layout/SubHeader/SubHeader';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Icon from '../../components/icon/Icon';
import Button from '../../components/bootstrap/Button';
import ListTickets from './ListVehicle';
import RightPane from '../../components/RightPane/RightPane';
import PostFleetForm from "./PostFleet"

const FleetDashboard = () => {
	const [toggleRightPanel, setToggleRightPanel] = useState(true);
	useEffect(() => {
		return () => { };
	}, []);

	// eslint-disable-next-line no-unused-vars

	return (
		<PageWrapper
			style={{ marginTop: "30px", marginBottom: "-75px" }}>
			<SubHeader style={{ marginTop: "70px" }}>
				<SubHeaderLeft style={{ marginTop: "120px" }}>
					<Icon icon='AddIcCall' className='me-2' size='2x' />
					
				</SubHeaderLeft>
				<SubHeaderRight>
					<Button
						className="raise-button text-dark"
						icon='LibraryAdd'
						text='Raise Ticket'
						onClick={() => setToggleRightPanel(!toggleRightPanel)}
						color='warning'
						size='md'
						aria-label='Toggle right panel'>Create vehicle on fleet</Button>

				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>
				<div className='row'>

					<div className='col-12'>
						<ListTickets />
					</div>
				</div>

				<RightPane setOpen={setToggleRightPanel} isOpen={toggleRightPanel} PostForm={PostFleetForm} title="Raise Tickets" />
			</Page>
		</PageWrapper>
	);
};

export default FleetDashboard;
