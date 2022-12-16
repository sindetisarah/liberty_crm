import React from 'react';
import { Helmet } from 'react-helmet'

const CustomHelmet = ({ titleHeader }) => {
    return (
        <>
            <Helmet>
                <title>{titleHeader + ` | ` + process.env.REACT_APP_SITE_NAME}</title>
            </Helmet>
        </>
    )
}

export default CustomHelmet