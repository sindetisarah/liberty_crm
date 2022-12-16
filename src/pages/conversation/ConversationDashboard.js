import React, { useEffect, useState } from 'react';
import SubHeader, { SubHeaderLeft } from '../../layout/SubHeader/SubHeader';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Icon from '../../components/icon/Icon';
import ListConversation from './ListConversation';
import "./Conversation.css"

const ConversationDashboard = (props) => {
    const [ticketid, setTicketid] = useState("")
    const [reason, setReason] = useState("")

    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        setTicketid(query.get('ticketId'))
        setReason(query.get('reason'))


        return () => { };
    }, []);

    // eslint-disable-next-line no-unused-vars

    return (
        <PageWrapper className='pagewrapper'>
            <SubHeader className='pagewrapper__subheader'>
                <SubHeaderLeft>
                    <div className='d-flex flex-row'>
                        <div><Icon icon='ArrowBack' className='me-2 flex__arrowback' size='3x' onClick={e => props.history.push("/dashboard/mytickets")} /></div>
                        <div className='text-muted flex__textheader'>
                            <h6> Reason: <b>{reason}</b></h6>
                            Ticket ID: {ticketid}
                        </div>
                    </div>
                </SubHeaderLeft>
            </SubHeader>
            <Page container='fluid'>
                <div className='row'>

                    <div className='col-12'>
                        <ListConversation props={props} />
                    </div>
                </div>
            </Page>
        </PageWrapper>
    );
};

export default ConversationDashboard;
