import React from 'react';
import PageNotFound from "../../assets/img/4457.svg"
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import Card from '../../components/bootstrap/Card';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import NotFoundPage from "./NotFoundPage"
import "./NotFound.css"

// eslint-disable-next-line react/prop-types
const DashNotFound = ({ isFluid }) => {

    return (
        <>
            <Helmet>
                <title>{`Page Not Found | ` + process.env.REACT_APP_SITE_NAME}</title>
            </Helmet>
            <PageWrapper title='Page Not Found'>
                <Page
                    className="page"
                    container='fluid'>
                    <Card stretch={isFluid}>
                        <NotFoundPage />
                    </Card>
                </Page>
            </PageWrapper>
        </>
    );
};

export default DashNotFound;
