import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../components/bootstrap/Card';
import Icon from '../../components/icon/Icon';
import { dashboardMenu } from '../../helpers/menu';
import useDarkMode from '../../hooks/useDarkMode';
import axiosInstance from '../../services/axiosInstance';

// eslint-disable-next-line react/prop-types

const DashboardPage = () => {
	const [account, setAccount] = useState('');
	const [loading, setLoading] = useState(false)

	useEffect(async () => {
		setLoading(true)
		await axiosInstance.get(`/customer/account/details`).then(response => {
			setAccount(response.data.body.data);
			localStorage.setItem("customerName", response.data.body.data.customerName)
			setLoading(false)
		}).catch(error => {
			console.log(error);
			if (error.response.status === 401) {
				if (window.confirm('Your session has expired. We are logging you out?')) {
					localStorage.clear()
					window.location.reload()
				}
			} else {
				alert(`Request failed. Something Went Wrong. Please try again`)
			}
			setLoading(false)
		});
	}, []);

	const date = new Date();
	const hour = date.getHours();
	const { darkModeStatus } = useDarkMode();

	return (
		<PageWrapper title={dashboardMenu.dashboard.text} style={{ backgroundColor: 'white' }}>
			<Page
				style={{ marginTop: '5px', backgroundColor: 'white' }}
				container='fluid'>
				<div className='row' style={{ backgroundColor: 'white' }}>
					<div className='col-12' style={{ padding: "3px 10px" }}>
						<h5>{hour >= 12 ? hour >= 16 ? <span>Good Evening,</span> : <span>Good afternoon,</span> : <span> Good Morning,</span>} <b>{!loading ? account.customerName : `Loading..`}</b></h5>
					</div>
					<hr />

					<div className='col-xl-3'>
						<Card stretch shadow='sm'>
							<CardHeader className='bg-light'>
								<CardLabel>
									<div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', width: "100%", alignItems: "center" }}>
										<CardTitle className='text-muted'>
											<Icon
												icon='AccountBox'
												size='5x'
												style={{ color: '#9FA0AC' }}
											/>

										</CardTitle>
										<CardSubTitle tag='h6'>
											<div>MY ACCOUNT <br /> <div style={{ marginTop: "6px", fontSize: "12px" }}></div>
												<div style={{ marginTop: "6px", fontSize: "12px" }}>{!loading ? `Tel :0723456789` : `Loading..`}</div>
											</div>
										</CardSubTitle>

									</div>
								</CardLabel>
							</CardHeader>
						</Card>
					</div>

					

					

					<div className='col-xl-3'>
						<Card stretch shadow='sm'>
							<CardHeader className='bg-light'>
								<CardLabel>
									<div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', width: "100%", alignItems: "center" }}>
										<CardTitle className='text-muted'>
											<Icon
												icon='AccountCircle'
												size='5x'
												color='blue'
												style={{ color: '#9FA0AC' }}
											/>

										</CardTitle>
										<CardSubTitle tag='h6'>
											<div>DESIGNATION <br /> <div style={{ marginTop: "6px", fontSize: "12px" }}> {!loading ? `TRUE` : `Loading..`}</div> </div>
										</CardSubTitle>
									</div>
								</CardLabel>
							</CardHeader>
						</Card>
					</div>

					<div className='col-xxl-6'>
						<Card stretch>
							<CardHeader borderSize={1} className="text-muted">
								<CardLabel icon='PointOfSale' iconColor='success'>
									<CardTitle >INFORMATION</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-md-6'>
										<Card
											className={classNames(
												'transition-base rounded-2 mb-0 text-dark',
												{
													'bg-l25-success bg-l10-success-hover':
														darkModeStatus,
													'bg-lo50-success bg-lo25-success-hover':
														!darkModeStatus,
												},
											)}
											shadow='sm'>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle tag='h6' className='h6'>
														CAREER CODE
													</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<div className='d-flex align-items-center pb-2'>
													
													
													<CardTitle tag='h6' className='h4 mt-1'>
														{!loading ? `KES.24536` : `Loading..`}
													</CardTitle>
												</div>
											</CardBody>
										</Card>
									</div>
									<div className='col-md-6'>
										<Card
											className={classNames(
												'transition-base rounded-2 mb-4 text-dark',
												{
													'bg-l25-success bg-l10-success-hover': darkModeStatus,
													'bg-lo50-success bg-lo25-success-hover':
														!darkModeStatus,
												},
											)}
											shadow='sm'>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle tag='h6' className='h6'>
														USER_ID
													</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<div className='d-flex align-items-center pb-2'>
													<div className='flex-shrink-0'>
														<Icon
															icon='MonetizationOn'
															size='4x'
															color='success'
														/>
													</div>
													<CardTitle tag='h4' className='h4 mt-1'>
														{!loading ? `KES.23456` : `Loading..`}
													</CardTitle>
												</div>
											</CardBody>
										</Card>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xxl-6'>
						<Card stretch>
							

							<CardBody>
								<div className='row g-4'>
									<div className='col-md-6'>
										<Card
											className={classNames(
												'transition-base rounded-2 mb-0 text-dark',
												{
													'bg-l25-success bg-l10-success-hover':
														darkModeStatus,
													'bg-lo50-success bg-lo25-success-hover':
														!darkModeStatus,
												},
											)}
											shadow='sm'>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle tag='h6' className='h6'>
														EMAIL
													</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<div className='d-flex align-items-center pb-2'>
													<div className='flex-shrink-1'>
														<Icon
															icon='NextPlan'
															size='4x'
															color='success'
														/>
													</div>
													<CardTitle tag='h4' className='h4 mt-1'>
														{!loading ? `sarah@gmail.com` : `Loading..`}
													</CardTitle>
												</div>
											</CardBody>
										</Card>
									</div>
									<div className='col-md-6'>
										<Card
											className={classNames(
												'transition-base rounded-2 mb-0 text-dark',
												{
													'bg-l25-success bg-l10-success-hover': darkModeStatus,
													'bg-lo50-success bg-lo25-success-hover':
														!darkModeStatus,
												},
											)}
											shadow='sm'>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle tag='h6' className='h6'>
														YEAR OF BIRTH
													</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<div className='d-flex align-items-center pb-2'>
													<div className='flex-shrink-1'>
														<Icon
															icon='NextPlan'
															size='4x'
															color='success'
														/>
													</div>
													<CardTitle tag='h4' className='h4 mt-1'>

														{!loading ? `22-12-2003` : `Loading..`}
													</CardTitle>
												</div>
											</CardBody>
										</Card>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
				
			</Page>
		</PageWrapper >
	);
};

export default DashboardPage;
