import React, { useState } from 'react';
import Button from '../../components/bootstrap/Button';
import './PostVehicle.css';

import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../components/bootstrap/Card';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import axiosInstance from '../../services/axiosInstance';

function PostFleetForm({ isFluid }) {
	const [region, setRegion] = useState("")
	const [primaryTerminus, setPrimaryTerminus] = useState("")
	const [routeNumber, setrouteNumber] = useState("")
	const [disable, setDisabled] = useState(true)
	const [secondaryTerminus, setSecondaryTerminus] = useState("")


	function submitHandler(e) {
		e.preventDefault();
		setDisabled(true)
		let payload = {
			name: localStorage.getItem('name'),
			region: region,
			primaryTerminus: primaryTerminus,
			secondaryTerminus: secondaryTerminus,
			routeNumber: routeNumber,
			maximumFare:"0"
		}
		if (window.confirm("Confirm you want to register a route ?")) {
			axiosInstance.post(`route`, payload).then(response => {
				alert('Route registered sucessful');
				window.location.reload()
			}).catch(error => {
				alert('Request failed. Something Went wrong: Error message: ' + error)
				setDisabled(false)
			});
		}
	}

	const checkButtonStatus = () => {
		if (routeNumber !== "" && primaryTerminus !== "" && region !== "") {
			setDisabled(false)
		} else {
			setDisabled(true)
		}
	}

	return (
		<div className='formHeader'>
			<Card stretch={isFluid}>
				<CardHeader borderSize={0} className="bg-light text-dark text-muted">
					<CardLabel icon='AirplaneTicket' iconColor='success'>
						<CardTitle>Register Route</CardTitle>
					</CardLabel>
				</CardHeader>
				<CardBody className='table-responsive' isScrollable={isFluid}>
					<form onSubmit={submitHandler}>
					<FormGroup
                            id='region'
                            name='region'
                            isFloating
                            style={{ marginTop: "10px" }}
                            label='region'>
                            <Input
                                value={region}
                                type='text'
                                onChange={(e) => {
                                    setRegion(e.target.value);
                                }}
                            />
                        </FormGroup>
						<FormGroup
                            id='secondaryTerminus'
                            name='secTerminus'
                            isFloating
                            style={{ marginTop: "10px" }}
                            label='secTerminus'>
                            <Input
                                value={secondaryTerminus}
                                type='text'
                                onChange={(e) => {
                                    setSecondaryTerminus(e.target.value);
                                }}
                            />
                        </FormGroup>
						<FormGroup label='primaryTerminus' className="formgroup__desc">
						<Input
                                value={primaryTerminus}
                                type='text'
                                onChange={(e) => {
                                    setPrimaryTerminus(e.target.value);
                                }}
                            />
							
						</FormGroup>
						<FormGroup label='routeNumber' className="formgroup__desc">
						<Input
                                value={routeNumber}
                                type='text'
                                onChange={(e) => {
                                    setrouteNumber(e.target.value);
                                }}
                            />
							
						</FormGroup>
						<br />
						<div className='col'>
							<Button color='warning' disabled={disable} className='rounded-1 w-100 submit-ticket text-dark' size='md' type='submit'>
								Submit
							</Button>
						</div>
					</form>
				</CardBody>
			</Card>
		</div>
	);
}

export default PostFleetForm;
