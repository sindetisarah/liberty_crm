import React, { useEffect, useState } from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../layout/SubHeader/SubHeader';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Icon from '../../components/icon/Icon';
import Button from '../../components/bootstrap/Button';
import RightPane from '../../components/RightPane/RightPane';
import ListReferrals from './ListSacco';
import PostSaccoForm from './PostSaccoForm';

const SaccoDashboard = () => {
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
                        text='FAdd Sacco'
                        onClick={() => setToggleRightPanel(!toggleRightPanel)}
                        color='warning'
                        aria-label='Toggle right panel'>Create Sacco</Button>

                </SubHeaderRight>
            </SubHeader>
            <Page container='fluid'>
                <div className='row'>

                    <div className='col-12'>
                        <ListReferrals />
                    </div>
                </div>

                <RightPane setOpen={setToggleRightPanel} isOpen={toggleRightPanel} PostForm={PostSaccoForm} title="Referrals" />
            </Page>
        </PageWrapper>
    );
};

export default SaccoDashboard;
