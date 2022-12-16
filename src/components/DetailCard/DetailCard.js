import React from 'react'
import PIC from "../../assets/profile/pic.jpeg"


const DetailCard = (props) => {
    return (
        <div className='container-fluid'>
            <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center', padding: '12px', boxShadow: '0px 0px 0px 1.5px #F3F2F1', transition: "0.3s", marginTop: "15px" }}>
                <img src={PIC} height="35" width="35" />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '10px' }}>
                    <div style={{ marginTop: '5px' }}><b>{props.title}:</b> {props.value}</div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard