import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom'

const Logout = () => {
    useEffect(() => {
        if (window.confirm('Are you sure you want to logout?')) {
            localStorage.clear()
            window.location.reload()
        }
    })

    return <Redirect to="/dashboard" />

}

export default Logout;
