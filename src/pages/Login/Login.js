import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import Card, { CardBody } from '../../components/bootstrap/Card';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Alert from '../../components/bootstrap/Alert';
import Input from '../../components/bootstrap/forms/Input';
import Button from '../../components/bootstrap/Button';
import Logo from '../../components/Logo/Logo';
import { authMenu } from '../../helpers/menu';
import axiosInstance from '../../services/axiosInstance';

export const validateInput = (inputID) => /^[0-9]{5,13}$/.test(inputID)

const Login = ({ isSignUp }) => {
    const [query, setQuery] = useState("")
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState("")
    const [disable, setDisabled] = useState(true)

    useEffect(() => {
        setMessage("")
        setError(false)
    }, [])

    const history = useHistory();


    const handleOnClick = useCallback((event) => {
        event.preventDefault();
    
            setDisabled(true)
            let json = { query: query }
            //post the user inputs(phoneNumber and pin to the login endpoint and capture the response data)
            axiosInstance.post(`user/login`, json).then(res => {
                console.log(JSON.stringify(res.data))
                if (res.data.headers.status) {
                    setMessage(res.data.headers.status_message);
                    setError(false)
                    setSuccess(true)
                    localStorage.setItem("query", query)
                    localStorage.setItem("msisdn", res.data.body.msisdn)
                    setTimeout(() => {
                        history.push(`/otp`), [history];
                    }, 2000)
                } else {
                    setError(true)
                    setSuccess(false)
                    setDisabled(false)
                    setMessage(res.data.headers.status_message)
                }
            }).catch(error => {
                console.log(error);
                setError(true)
                setSuccess(true)
                setDisabled(true)
                setMessage(`Request failed. No account found`)
                history.push(`/otp`), [history];


            });
        
    });
    return (
        <PageWrapper title={authMenu.login.text} bgcolor="#3A5260">
            <Page style={{ height: '100vh' }} className='p-0'>
                <div className='row h-100 align-items-center justify-content-center'>
                    <div className='col-xl-4 col-lg-6 col-md-8 shadow-1d-container'>
                        <Card className='shadow-3d-dark' data-tour='login-page'>
                            <CardBody>
                                <div className='text-center'>
                                    <Logo width={380} />
                                </div>
                                <div className='text-center h4 fw-bold mt-3'>Login to E-Nauli</div>
                                <div className='text-center h6 text-muted mb-5 mt-2'>
                                    Enter your phoneNumber to Continue
                                </div>
                                <form onSubmit={handleOnClick} className='row g-4'>
                                    <div className='col-12'>
                                        <>
                                            {error && <Alert color='danger' border='0' style={{ color: "white" }}>{message}</Alert>}
                                            {success && <Alert color='success' border='0' style={{ color: "white" }}>{message}</Alert>}
                                        </>
                                        <FormGroup
                                            id='phoneNumber'
                                            name='phoneNumber'
                                            isFloating
                                            label='Enter Your phoneNumber'>
                                            <Input
                                                value={query}
                                                type='number'
                                                onChange={(e) => {
                                                    if (e.target.value === "") {
                                                        setDisabled(true)
                                                    } else {
                                                        setDisabled(false)
                                                    }
                                                    setQuery(e.target.value);
                                                }}
                                            />
                                        </FormGroup>
                                        <FormGroup
                                            id='pin'
                                            name='pin'
                                            isFloating
                                            label='Enter Your pin'>
                                            <Input
                                                pin={query}
                                                type='number'
                                                onChange={(e) => {
                                                    if (e.target.value === "") {
                                                        setDisabled(true)
                                                    } else {
                                                        setDisabled(false)
                                                    }
                                                    setQuery(e.target.pin);
                                                }}
                                            />
                                        </FormGroup>
                                    </div>
                                    <div className='col-12'>
                                        <Button
                                            disabled={disable}
                                            color='info'
                                            className='w-100 py-3 text-dark'
                                            type='submit'>
                                            Login
                                        </Button>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Page>
        </PageWrapper>
    );
};
Login.propTypes = {
    isSignUp: PropTypes.bool,
};
Login.defaultProps = {
    isSignUp: false,
};

export default Login;
