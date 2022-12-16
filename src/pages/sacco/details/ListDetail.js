import React, { useState, useEffect } from 'react';
import Card, {
    CardBody,
    CardHeader,
    CardLabel,
    CardTitle,
} from '../../../components/bootstrap/Card';
import { dashboardMenu } from '../../../helpers/menu';
import 'react-whatsapp-chat-widget/index.css';
import CustomHelmet from '../../../components/Helmet/Helmet';
import axiosInstance from '../../../services/axiosInstance';
import DetailCard from '../../../components/DetailCard/DetailCard';
import Spinner from '../../../components/Spinner/Spinner';
import Select from '../../../components/bootstrap/forms/Select';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import { productOfInterest } from '../../../helpers/options';
import Button from '../../../components/bootstrap/Button';
import moment from 'moment';

const ListDetail = ({ isFluid, props }) => {
    const [id, setId] = useState("")
    const [referrals, setReferrals] = useState([]);
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [watersource, setWaterSource] = useState("")
    const [product, setProduct] = useState("")
    const [location, setLocation] = useState("")
    const [list, setList] = useState(true)

    useEffect(() => {
        setLoading(true)
        setList(true)
        const query = new URLSearchParams(props.location.search);
        setId(query.get('referralId'))
        axiosInstance.get(`referrals?referralId=${query.get('referralId')}`).then(response => {
            console.log(response.data.body)
            if (response.data.body.length === 1) {
                setReferrals(response.data.body)
                setName(response.data.body[0].fullName)
                setPhone(response.data.body[0].phoneNumber)
                setWaterSource(response.data.body[0].waterSource)
                setProduct(response.data.body[0].productInterested)
                setLocation(response.data.body[0].location)
            } else {
                props.history.push("/dashboard/referral")
            }
            setLoading(false)
        }).catch(error => {
            console.log(error.response);
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

    function submitHandler(e) {
        e.preventDefault();
        let payload = {
            fullName: name,
            phoneNumber: phone,
            location: location,
            waterSource: watersource,
            productInterested: product
        }
        if (window.confirm(`Confirm you want to update the details of referral ${name}?`)) {
            axiosInstance.put(`referrals/${id}`, payload).then(response => {
                alert(response.data.headers.status_message);
                window.location.reload()
            }).catch(errors => {
                console.log(errors);
                alert('Request failed. Something Went wrong')
                clearTextFields()
            });
        }
    }

    return (
        <>
            <CustomHelmet titleHeader={dashboardMenu.verifyDevice.text} />
            {loading === false && <div className='row container-fluid'>
                {list === true && <div className='col-lg-6 col-md-10 col-sm-12 col-xs-12 mt-4 bg-white'>
                    <Card stretch={isFluid} className='card--details'>
                        <CardHeader borderSize={0} className="bg-light text-dark text-muted card__cardheader">
                            <CardLabel icon='Devices' iconColor='success'>
                                <CardTitle>List Details</CardTitle>
                            </CardLabel>
                        </CardHeader>
                        <CardBody>
                            <DetailCard title="Full Name" value={referrals[0]?.fullName} />
                            <DetailCard title="Phone Number" value={referrals[0]?.phoneNumber} />
                            <DetailCard title="Location" value={referrals[0]?.location} />
                            <DetailCard title="Water Source" value={referrals[0]?.waterSource} />
                            <DetailCard title="Product Interested" value={referrals[0]?.productInterested} />
                            <DetailCard title="Date Created" value={moment(referrals[0]?.createdAt).format('YYYY-MM-DD HH:mm:ss')} />
                            <DetailCard title="Date Updated" value={moment(referrals[0]?.updatedAt).format('YYYY-MM-DD HH:mm:ss')} />

                            <Button color='warning' onClick={e => setList(false)} className='rounded-1 w-100 submit-ticket text-dark mt-5' size='md' type='submit'>
                                Edit Referral
                            </Button>
                        </CardBody>
                    </Card>
                </div>
                }
                {list === false &&
                    <div className='col-lg-6 col-md-10 col-sm-12 col-xs-12 mt-4 bg-white'>
                        <Card stretch={isFluid} className='card--details'>
                            <CardHeader borderSize={0} className="bg-light text-dark text-muted card__cardheader">
                                <CardLabel icon='Edit' iconColor='success'>
                                    <CardTitle>Edit Referral Detail</CardTitle>
                                </CardLabel>
                            </CardHeader>
                            <CardBody>
                                <form onSubmit={submitHandler}>
                                    <FormGroup
                                        id='fullName'
                                        name='fullName'
                                        isFloating
                                        label='Enter Customer Name'>
                                        <Input
                                            value={name}
                                            type='text'
                                            onChange={(e) => {
                                                setName(e.target.value);
                                            }}
                                        />
                                    </FormGroup>
                                    <FormGroup
                                        id='phone'
                                        name='Phone'
                                        isFloating
                                        style={{ marginTop: "10px" }}
                                        label='Phone Number'>
                                        <Input
                                            value={phone}
                                            type='number'
                                            onChange={(e) => {
                                                setPhone(e.target.value);
                                            }}
                                        />
                                    </FormGroup>

                                    <FormGroup
                                        id='prod'
                                        name='prod'
                                        style={{ marginTop: "10px" }}
                                        label='Product of Interest'>
                                        <Select name='PROD' value={product} onChange={e => setProduct(e.target.value)}>
                                            <option value="" disabled>--</option>
                                            {productOfInterest.map(d => {
                                                return <option value={d.value}>{d.value}</option>
                                            })}
                                        </Select>

                                    </FormGroup>

                                    <FormGroup
                                        id='location'
                                        name='Location'
                                        isFloating
                                        style={{ marginTop: "10px" }}
                                        label='Location'>
                                        <Input
                                            value={location}
                                            type='text'
                                            onChange={(e) => {
                                                setLocation(e.target.value);
                                            }}
                                        />
                                    </FormGroup>

                                    <FormGroup
                                        id='water_source'
                                        name='water_source'
                                        style={{ marginTop: "10px" }}
                                        label='Watersource'>
                                        <Select name='water_source' label="WaterSource" value={watersource} onChange={e => {
                                            setWaterSource(e.target.value)

                                        }}>
                                            <option value="" disabled>--</option>
                                            <option value='Yes'>Yes</option>
                                            <option value='No'>No</option>

                                        </Select>
                                    </FormGroup>

                                    <br />

                                    <div className='col'>
                                        <Button color='warning' disabled={
                                            name === "" || location === "" || watersource === "" || product === "" || (/^[0-9]{10,12}$/.test(phone) === false) ? true : false
                                        } className='rounded-1 w-100 submit-ticket text-dark' size='md' type='submit'>
                                            Submit
                                        </Button>

                                        <Button onClick={e => setList(true)} className='btn btn-outline-danger rounded-1 w-100 submit-ticket text-dark mt-5' size='md' type='submit'>
                                            Cancel
                                        </Button>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                }
            </div>}

            {loading === true && <Spinner />}
        </>
    );
};

export default ListDetail;
