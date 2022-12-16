import React, { useEffect, useState } from 'react';
import Card, {
    CardBody,
    CardHeader,
    CardLabel,
    CardTitle,
} from '../../components/bootstrap/Card';
import { dashboardMenu } from '../../helpers/menu';
import axiosInstance from '../../services/axiosInstance';
import CustomHelmet from '../../components/Helmet/Helmet';
import { Link } from 'react-router-dom';
import { referralsHeaders } from '../../helpers/menu';
import Table from '../../components/Table/Table';
import './Sacco.css'

const status = {
    "0": <span className='text-warning'><td className='td__status'>Pending</td></span>,
    "1": <span className='text-success'><td className="td__status">Accepted</td></span>
}

const getValue = (passData) => {
    for (const key in status) {
        if (status.hasOwnProperty(key)) {
            if (parseInt(passData) === parseInt(key)) {
                const value = status[key];
                return value
            }
        }
    }
}

const customLink = (referralId) => {
    return <div>
        <Link to={`/dashboard/referral/details?referralId=${referralId}`}><u>{referralId.substring(0, 8).toUpperCase()}</u></Link>
    </div>
}

// eslint-disable-next-line react/prop-types
const ListReferrals = ({ isFluid }) => {
    const [sacco, setSacco] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axiosInstance.get(`sacco`).then((response) => {
            let results = response.data.body
            
            setSacco(results)

            setLoading(false)
        }).catch(error => {
            console.log(error);
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

    return (
        <>
            <CustomHelmet titleHeader={dashboardMenu.sacco.text} />
            <Card stretch={isFluid}>
                <CardHeader borderSize={0} className="bg-light text-dark text-muted">
                    <CardLabel icon='AirplaneTicket' iconColor='success'>
                        <CardTitle>Sacco List</CardTitle>
                    </CardLabel>
                </CardHeader>

                <CardBody className='table-responsive' isScrollable={isFluid}>
                    {sacco.length > 0 ? (
                        <Table headers={referralsHeaders} data={sacco} />
                    ) :
                        <div className='table__nodetail'>
                            {loading ? `Fetching referrals. Please wait...` : `Oops! Sorry No List of Sacco found`}
                        </div>
                    }
                </CardBody>
            </Card>
        </>
    );
};

export default ListReferrals;
