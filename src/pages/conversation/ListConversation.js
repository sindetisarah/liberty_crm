import React, { useEffect, useState } from 'react'
import axiosInstance from '../../services/axiosInstance';
import PIC from "../../assets/profile/pic.jpeg"
import moment from 'moment'
import Spinner from '../../components/Spinner/Spinner';
import PageNotFound from "../../assets/img/4457.svg"
import { Link } from 'react-router-dom';
import "./Conversation.css"

const ListConversation = ({ props }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const query = new URLSearchParams(props.location.search)
        if (query.get('ticketId') === "" || query.get('ticketId') === null) {
            props.history.push('/dashboard/mytickets')
        }
        let json = { ticketId: parseInt(query.get('ticketId')) }
        axiosInstance.post(`tickets/conversations`, json).then(response => {
            setData(response.data.body)
            setLoading(false)
        }).catch(error => {
            setLoading(false)
            if (error.response.status === 401) {
                if (window.confirm('Your session has expired. We are logging you out?')) {
                    localStorage.clear()
                    window.location.reload()
                }
            } else {
                console.error(`Request failed. Something Went Wrong. Please try again`)
            }
        });
    }, []);

    return (
        <div style={{ marginBottom: "30px" }}>
            {data.map((d, i) => {
                return <div key={i} className='container-fluid'>
                    <div className='cardfluid'>
                        <img src={PIC} height="75" width="75" />
                        <div className='cardfluid__text'>
                            <div>{d.body_text}</div>
                            <div className='mt-1'><b>Date:</b> {moment(d.created_at).format('YYYY-MM-DD HH:mm:ss')}</div>
                        </div>
                    </div>
                </div>
            })}
            {data.length === 0 && loading === false &&
                <div className='nocard'>
                    <div className='nocard__title'><h5>Oops! Sorry No Comments Records found</h5></div>
                    <div className='nocard__image'>
                        <img src={PageNotFound} style={{ pointerEvents: "none" }} height="60%" width="100%" />
                    </div>
                    <div className='mb-3 bg-white'><p className='text-danger bg-white text-center'>
                        <Link to="/dashboard/mytickets" className='nocard__button'>Go Back </Link>
                    </p></div>
                </div>
            }
            {loading && <Spinner />}
        </div>
    )
}

export default ListConversation