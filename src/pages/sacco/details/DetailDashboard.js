import React, { useEffect, useState } from 'react';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Icon from '../../../components/icon/Icon';
import ListDetail from './ListDetail';
import "../Sacco.css"

const DetailDashboard = (props) => {
    const [referral, setReferral] = useState("")

    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        setReferral(query.get('saccoId'))

        return () => { };
    }, []);

    // eslint-disable-next-line no-unused-vars

    return (
        <PageWrapper className='pagewrapper'>
            <SubHeader className='pagewrapper__subheader'>
                <SubHeaderLeft className='pagewrapper__subheaderleft'>
                    <div className='d-flex flex-row align-items-center' >
                        <div><Icon icon='ArrowBack' className='me-2 icon--arrowback' size='3x' onClick={e => props.history.push("/dashboard/referral")} /></div>
                        <div className='text-muted flex__text'>
                            Sacco ID: {referral}
                        </div>
                    </div>
                </SubHeaderLeft>
            </SubHeader>
            <Page container='fluid'>
                <div className='row'>

                    <div className='col-12'>
                        <ListDetail props={props} />
                    </div>
                </div>
            </Page>
        </PageWrapper>
    );
};

export default DetailDashboard;
