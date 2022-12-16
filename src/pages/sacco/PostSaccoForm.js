import React, { useState } from 'react';
import Button from '../../components/bootstrap/Button';
import '../fleet/PostVehicle.css';
import Select from '../../components/bootstrap/forms/Select';
import Input from '../../components/bootstrap/forms/Input';
import Card, {
    CardBody,
    CardHeader,
    CardLabel,
    CardTitle,
} from '../../components/bootstrap/Card';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import axiosInstance from '../../services/axiosInstance';
import { productOfInterest } from '../../helpers/options';

function PostSaccoForm({ isFluid }) {
    const [name, setName] = useState("")
    const [contactPerson, setContactPerson] = useState("")
    const [senderId, setSenderId] = useState("")
    const [pin, setPin] = useState("")
    const [postalAdress, setPostalAdress] = useState("")


    function submitHandler(e) {
        e.preventDefault();
        let payload = {
            name: name,
            contactPerson: contactPerson,
            postalAdress: postalAdress,
            senderId: senderId,
            pin: pin
        }
        if (window.confirm(`Confirm you want to sent the referral to ${name}?`)) {
            axiosInstance.post(`sacco`, payload).then(response => {
                alert(response.data.headers.status_message);
                window.postalAdress.reload()
                console.log(response.status);
            }).catch(errors => {
                console.log(errors);
                alert('Request failed. Something Went wrong')
                clearTextFields()
            });
        }
    }

    const clearTextFields = () => {
        setName("")
        setContactPerson("")
        setPostalAdress("")
        setSenderId("")
        setPin("")
    }

    return (
        <div className='formHeader'>
            <Card stretch={isFluid}>
                <CardHeader borderSize={0} className="bg-light text-dark text-muted">
                    <CardLabel icon='AirplaneTicket' iconColor='success'>
                        <CardTitle>Create Sacco</CardTitle>
                    </CardLabel>
                </CardHeader>
                <CardBody className='table-responsive' isScrollable={isFluid}>
                    <form onSubmit={submitHandler}>
                        <FormGroup
                            id='name'
                            name='name'
                            isFloating
                            label=' Name'>
                            <Input
                                value={name}
                                type='text'
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </FormGroup>
                        <FormGroup
                            id='contactPerson'
                            name='Phone'
                            isFloating
                            style={{ marginTop: "10px" }}
                            label='ContactPerson'>
                            <Input
                                value={contactPerson}
                                type='number'
                                onChange={(e) => {
                                    setContactPerson(e.target.value);
                                }}
                            />
                        </FormGroup>
                        <FormGroup
                            id='pin'
                            name='Pin'
                            isFloating
                            style={{ marginTop: "10px" }}
                            label='Pin'>
                            <Input
                                value={pin}
                                type='number'
                                onChange={(e) => {
                                    setPin(e.target.value);
                                }}
                            />
                        </FormGroup>

                       

                        <FormGroup
                            id='postalAdress'
                            name='Location'
                            isFloating
                            style={{ marginTop: "10px" }}
                            label='postalAdress'>
                            <Input
                                value={postalAdress}
                                type='text'
                                onChange={(e) => {
                                    setPostalAdress(e.target.value);
                                }}
                            />
                        </FormGroup>

                        <FormGroup
                            id='sender_id'
                            name='sender_id'
                            style={{ marginTop: "10px" }}
                            label='senderid'>
                                <Input
                                value={senderId}
                                type='text'
                                onChange={(e) => {
                                    setSenderId(e.target.value);
                                }}
                            />
                            
                        </FormGroup>

                        <br />

                        <div className='col'>
                            <Button color='warning' disabled={
                                name === "" || postalAdress === "" || senderId === "" || pin === "" || (/^[0-9]{10,12}$/.test(contactPerson) === false) ? true : false
                            } className='rounded-1 w-100 submit-ticket text-dark' size='md' type='submit'>
                                Submit
                            </Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}

export default PostSaccoForm;
